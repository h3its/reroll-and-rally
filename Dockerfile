FROM node:20

WORKDIR /app
COPY . .

RUN npm install

# Build happens at runtime, when env vars are available
CMD ["sh", "-c", "npx svelte-kit sync && npm run build && node build"]