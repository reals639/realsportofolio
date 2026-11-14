import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Ensures all CSS, JS, MP3, and OBJ paths work on GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ai: resolve(__dirname, 'AI.html'),
        bridge: resolve(__dirname, 'bridge.html'),
        crosskart: resolve(__dirname, 'crosskart.html'),
        gamedev: resolve(__dirname, 'gamedev.html'),
        greenhouse: resolve(__dirname, 'greenhouse.html'),
        ilove: resolve(__dirname, 'ilove.html'),
        love: resolve(__dirname, 'love.html'),
        mainpage: resolve(__dirname, 'main.html'),
        pelton: resolve(__dirname, 'pelton.html'),
        powersupply: resolve(__dirname, 'powersuplly.html'),
        thiswebsite: resolve(__dirname, 'thiswebsite.html'),
      },
    },
  },
});
