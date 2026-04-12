# CodeCanvas Studio

![CodeCanvas Studio Thumbnail](public/the-editor-thumbnail.svg)

**CodeCanvas Studio** is a blazing-fast, AI-integrated web IDE built entirely in the browser using **Next.js App Router**, **WebContainers**, **Monaco Editor**, and **local LLMs via Ollama**. It offers real-time code execution, an AI-powered chat assistant, and support for multiple tech stacks all wrapped in a polished developer-first UI.

---

## Features

- OAuth login with Google and GitHub
- Modern UI built with Tailwind CSS and shadcn/ui
- Dark and light mode support
- Starter-based playgrounds for React, Next.js, Express, Hono, Vue, and Angular
- Custom file explorer for creating, renaming, and deleting files and folders
- Monaco editor with formatting, syntax highlighting, and AI suggestions
- WebContainer preview and embedded terminal
- AI chat assistant powered by Ollama

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 App Router |
| Styling | Tailwind CSS, shadcn/ui |
| Language | TypeScript |
| Auth | Auth.js / NextAuth |
| Editor | Monaco Editor |
| AI | Ollama |
| Runtime | WebContainers |
| Terminal | xterm.js |
| Database | MongoDB via Prisma |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_connection_string
```

### 4. Start Ollama

```bash
ollama run codellama
```

### 5. Run the app

```bash
npm run dev
```

Visit `http://localhost:3000`.

---

## Keyboard Shortcuts

- `Ctrl + Space` triggers AI suggestions
- `Tab` accepts the current suggestion

---

## Notes

- Playground templates are loaded from `the-editor-starters/`
- AI chat and code completion expect Ollama on port `11434`
- MongoDB and OAuth credentials are required for the full app experience
