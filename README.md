<div align="center">
  <br />
  <h1>🎨 CodeCanvas Studio</h1>
  <p>
    <strong>A blazing-fast, AI-integrated Web IDE built entirely in the browser.</strong>
  </p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#️-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-ai-configuration">AI Configuration</a>
  </p>
</div>

---

**CodeCanvas Studio** offers real-time code execution, an AI-powered chat assistant, and support for multiple tech stacks—all wrapped in a polished, developer-first UI powered by **Next.js**, **WebContainers**, and **Monaco Editor**. 

## ✨ Features

- **🔒 Seamless Authentication:** OAuth login powered by Auth.js (Google and GitHub).
- **🌗 Modern UI:** Built with Tailwind CSS and shadcn/ui, featuring robust Dark/Light mode support.
- **🚀 Instant Playgrounds:** Starter-based templates for **React**, **Next.js**, **Express**, **Hono**, **Vue**, and **Angular**.
- **📁 File Management:** Custom file explorer for creating, renaming, and deleting files and folders intuitively.
- **📝 Pro Editor:** Monaco editor integration with real-time formatting, syntax highlighting, and contextual AI suggestions.
- **⚡ In-Browser Execution:** WebContainer preview and embedded terminal (xterm.js) for running Node.js environments directly in the browser.
- **🤖 AI Assistant:** Integrated AI chat assistant and inline code completion (powered by Ollama or any external API).

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 App Router](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [NextAuth (Auth.js)](https://authjs.dev/)
- **Editor:** [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Runtime:** [WebContainers](https://webcontainers.io/) & [xterm.js](https://xtermjs.org/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Prisma ORM](https://www.prisma.io/)
- **AI Integration:** [Ollama](https://ollama.com/) (Local) / Cloud APIs

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Cluster (e.g., MongoDB Atlas)
- GitHub / Google OAuth credentials
- *(Optional)* [Ollama](https://ollama.com/) for local AI features

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and copy the contents from `.env.example`:

```bash
cp .env.example .env
```

Fill in your variables:

```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/vibe-editor?retryWrites=true&w=majority"
AUTH_SECRET="your_generated_secret_here" # Generate one using: npx auth secret

# OAuth Providers
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_secret"
AUTH_GOOGLE_ID="your_google_client_id"
AUTH_GOOGLE_SECRET="your_google_secret"

# AI Configuration (Optional)
AI_SERVICE_URL="http://localhost:11434/api/generate"
AI_MODEL="qwen2.5-coder:0.5b" # Or "codellama:latest" depending on your system RAM
```

### 4. Database Setup

Push the Prisma schema to your MongoDB cluster to initialize the collections:

```bash
npx prisma db push
npx prisma generate
```

### 5. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application!

## 🤖 AI Configuration

CodeCanvas Studio supports local AI models for maximum privacy and cost-efficiency.

**To run the AI locally:**
1. Install [Ollama](https://ollama.com/).
2. Pull a code-optimized model. If your system has limited RAM (< 4GB), use an ultra-lightweight model:
   ```bash
   ollama run qwen2.5-coder:0.5b
   ```
   *If you have plenty of RAM (16GB+), you can run the standard CodeLlama:*
   ```bash
   ollama run codellama:latest
   ```
3. Update `AI_MODEL` in your `.env` to match the downloaded model.

**Keyboard Shortcuts for AI:**
- `Ctrl + Space` : Trigger manual AI suggestions
- `Tab` : Accept the inline AI suggestion
- `Esc` : Reject/Dismiss the AI suggestion

## 📁 Project Structure Notes
- Playground templates are dynamically loaded from the `the-editor-starters/` directory.

---
<div align="center">
  <i>Built with ❤️ for developers.</i>
</div>
