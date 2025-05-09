# MyBlog SvelteKit Template

A ready-to-go SvelteKit blog starter template integrating Supabase, Tailwind CSS (with Typography and Forms), DaisyUI, and Docker (with Docker Compose). It’s designed to help you quickly launch a production-ready blog with dynamic routes, markdown-style content formatting, and a seamless development workflow.

## 🔑 Key Features

* **SvelteKit**: Server-side rendering (SSR) and filesystem-based routing for lightning-fast pages.
* **Supabase**: Backend-as-a-Service for authentication and database (PostgreSQL) integration.
* **Tailwind CSS**: Utility-first styling with:

  * `@tailwindcss/typography` for elegant prose formatting.
  * `@tailwindcss/forms` for consistent form element styles.
* **DaisyUI**: Prebuilt Tailwind component library for buttons, cards, navbars, alerts, and themes.
* **Dynamic Routing**: File-based routing with `[id]` folders for individual blog posts.
* **Docker & Docker Compose**:

  * **Dev Mode**: Live-reload dev server on port 5173.
  * **Prod Mode**: SSR build on port 3000 with secure environment variable injection.
* **Environment Config**: `.env` file for Supabase credentials (excluded from Git via `.gitignore`).

## 🚀 Quick Start

### Prerequisites

* Node.js >= v20
* Docker & Docker Compose
* A [Supabase](https://supabase.com) project with a `BlogPost` table (columns: `id`, `Title`, `Desc`, `Body`).

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/myblog-template.git
cd myblog-template
```

### 2. Configure environment

Copy the example env file and fill in your Supabase credentials:

```bash
cp .env.example .env
# Edit .env:
# VITE_SUPABASE_URL=https://xyz.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Development

Start the live-reload development server in Docker:

```bash
docker-compose up --build
```

* Dev UI: [http://localhost:5173](http://localhost:5173)
* Changes to `.svelte`, JS, and CSS files reload instantly.

### 4. Production Build

Build and run the SSR app in Docker:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

* SSR UI: [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
myblog-template/
├── src/
│   ├── lib/
│   │   └── supabaseClient.js   # Supabase client setup
│   └── routes/
│       ├── +layout.svelte      # Global layout with navbar & footer
│       ├── +page.svelte        # Home landing page
│       └── blog/
│           ├── +page.js        # Fetch list of posts
│           ├── +page.svelte    # Render list of posts (cards)
│           └── [id]/
│               ├── +page.js    # Fetch single post
│               └── +page.svelte# Post detail with `prose` styling
├── app.css                     # Tailwind base, components, utilities
├── tailwind.config.js          # Tailwind + DaisyUI + plugin config
├── postcss.config.cjs          # PostCSS with Tailwind wrapper
├── Dockerfile                  # Production Dockerfile
├── Dockerfile.dev              # Dev Dockerfile with live reload
├── docker-compose.yml          # Compose for dev
├── docker-compose.prod.yml     # Compose for prod
├── .env.example                # Example environment variables
└── README.md                   # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📜 License

[MIT](LICENSE)

