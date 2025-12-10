import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/my-portfolio/",   // your GitHub repo name EXACTLY
  plugins: [react(), tailwindcss()],
});
