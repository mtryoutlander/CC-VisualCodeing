import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CC-VisuralCodeing/', // Ensure the base path matches your repository name
  build: {
    rollupOptions: {
      input: './src/main.ts', // Explicitly set the entry point
    },
  },
});
