import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: isBuild
      ? [react()] 
      : [
          laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
          }),
          react()
        ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: isBuild ? 'index.html' : undefined,
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js'),
      },
    }
  };
});
