# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build

# ---- run stage: nginx ----
FROM nginx:alpine
# optional custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# static build output
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
