import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import inertia from './resources/scripts/vite/inertia-layout'

export default defineConfig({
  plugins: [
    inertia(),
    vue(),
    laravel({
      input: [
        'resources/css/app.css',
        'resources/scss/app.scss',
        'resources/js/app.js',
      ],
      refresh: {
        paths: [
          'resources/views/**',
          'routes/**',
          'app/Http/Livewire/**',
          'resources/js/vue/**',
        ],
        //config: { delay: 300 }
      },
    }),
  ],
})
