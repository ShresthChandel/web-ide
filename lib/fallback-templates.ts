import type { TemplateFolder } from "@/modules/playground/lib/path-to-json";

type TemplateKey = "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";

const root = (items: TemplateFolder["items"]): TemplateFolder => ({
  folderName: "Root",
  items,
});

const file = (name: string, ext: string, content: string) => ({
  filename: name,
  fileExtension: ext,
  content,
});

const folder = (name: string, items: TemplateFolder["items"]) => ({
  folderName: name,
  items,
});

export const fallbackTemplates: Record<TemplateKey, TemplateFolder> = {
  REACT: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "react-playground",
          private: true,
          version: "0.0.0",
          type: "module",
          scripts: {
            dev: "vite --host 0.0.0.0 --port 3000",
            build: "vite build",
            preview: "vite preview --host 0.0.0.0 --port 3000",
          },
          dependencies: {
            react: "^19.1.0",
            "react-dom": "^19.1.0",
          },
          devDependencies: {
            "@vitejs/plugin-react": "^4.7.0",
            vite: "^7.1.0",
          },
        },
        null,
        2
      )
    ),
    file(
      "index",
      "html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Playground</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
    ),
    file(
      "vite.config",
      "js",
      `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});`
    ),
    folder("src", [
      file(
        "main",
        "jsx",
        `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
      ),
      file(
        "App",
        "jsx",
        `export default function App() {
  return (
    <main className="app-shell">
      <h1>React Playground</h1>
      <p>Your WebContainer-powered React app is running.</p>
    </main>
  );
}`
      ),
      file(
        "styles",
        "css",
        `:root {
  font-family: Arial, sans-serif;
  color: #111827;
  background: linear-gradient(135deg, #fff7ed, #fee2e2);
}

body {
  margin: 0;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  gap: 0.75rem;
}`
      ),
    ]),
  ]),
  NEXTJS: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "next-playground",
          private: true,
          version: "0.1.0",
          scripts: {
            dev: "next dev -H 0.0.0.0 -p 3000",
            build: "next build",
            start: "next start -H 0.0.0.0 -p 3000",
          },
          dependencies: {
            next: "^15.4.5",
            react: "^19.1.0",
            "react-dom": "^19.1.0",
          },
        },
        null,
        2
      )
    ),
    file(
      "jsconfig",
      "json",
      JSON.stringify(
        {
          compilerOptions: {
            baseUrl: ".",
          },
        },
        null,
        2
      )
    ),
    folder("app", [
      file(
        "page",
        "js",
        `export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeContent: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Next.js Playground</h1>
        <p>Your Next app is running in WebContainer.</p>
      </div>
    </main>
  );
}`
      ),
      file(
        "layout",
        "js",
        `export const metadata = {
  title: "Next Playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`
      ),
    ]),
  ]),
  EXPRESS: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "express-playground",
          private: true,
          version: "1.0.0",
          scripts: {
            dev: "node server.js",
            start: "node server.js",
          },
          dependencies: {
            express: "^4.21.2",
          },
        },
        null,
        2
      )
    ),
    file(
      "server",
      "js",
      `const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("<h1>Express Playground</h1><p>Your Express server is running.</p>");
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server listening on http://0.0.0.0:3000");
});`
    ),
  ]),
  VUE: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "vue-playground",
          private: true,
          version: "0.0.0",
          type: "module",
          scripts: {
            dev: "vite --host 0.0.0.0 --port 3000",
            build: "vite build",
            preview: "vite preview --host 0.0.0.0 --port 3000",
          },
          dependencies: {
            vue: "^3.5.18",
          },
          devDependencies: {
            "@vitejs/plugin-vue": "^5.2.4",
            vite: "^7.1.0",
          },
        },
        null,
        2
      )
    ),
    file(
      "index",
      "html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Playground</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`
    ),
    file(
      "vite.config",
      "js",
      `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});`
    ),
    folder("src", [
      file(
        "main",
        "js",
        `import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");`
      ),
      file(
        "App",
        "vue",
        `<template>
  <main class="shell">
    <h1>Vue Playground</h1>
    <p>Your Vue app is running in WebContainer.</p>
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ecfeff, #dbeafe);
}

.shell {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  gap: 0.75rem;
}
</style>`
      ),
    ]),
  ]),
  HONO: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "hono-playground",
          private: true,
          version: "1.0.0",
          scripts: {
            dev: "node server.js",
            start: "node server.js",
          },
          dependencies: {
            hono: "^4.6.10",
            "@hono/node-server": "^1.13.7",
          },
        },
        null,
        2
      )
    ),
    file(
      "server",
      "js",
      `const { Hono } = require("hono");
const { serve } = require("@hono/node-server");

const app = new Hono();

app.get("/", (c) => c.html("<h1>Hono Playground</h1><p>Your Hono server is running.</p>"));

serve({
  fetch: app.fetch,
  port: 3000,
  hostname: "0.0.0.0",
});`
    ),
  ]),
  ANGULAR: root([
    file(
      "package",
      "json",
      JSON.stringify(
        {
          name: "angular-playground",
          private: true,
          version: "0.0.0",
          type: "module",
          scripts: {
            dev: "vite --host 0.0.0.0 --port 3000",
            build: "vite build",
            preview: "vite preview --host 0.0.0.0 --port 3000",
          },
          devDependencies: {
            vite: "^7.1.0",
          },
        },
        null,
        2
      )
    ),
    file(
      "index",
      "html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Angular Playground</title>
  </head>
  <body>
    <main class="shell">
      <h1>Angular Playground</h1>
      <p>This workspace is ready for Angular-style experimentation.</p>
    </main>
  </body>
</html>`
    ),
  ]),
};

export function getFallbackTemplate(templateKey: string): TemplateFolder | null {
  if (templateKey in fallbackTemplates) {
    return fallbackTemplates[templateKey as TemplateKey];
  }

  return null;
}
