import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'vite-plugin-laravel/inertia'
import { createPinia } from 'pinia'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
  resolve: (name) => resolvePageComponent(name, import.meta.glob('./vue/pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createPinia())
      .mount(el)
  },
})

InertiaProgress.init()
