import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueRouter(),vue(), vueDevTools(), tailwindcss(), Icons(), Components(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
