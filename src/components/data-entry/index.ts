import type { Plugin } from 'vue'
import InputSearch from './input/InputSearch/index.vue'

export default {
  install(app) {
    app.component('InputSearch', InputSearch as Record<string, unknown>)
  }
} satisfies Plugin
