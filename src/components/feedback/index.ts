import type { Plugin } from 'vue'
import Spinner from './Spinner/index.vue'

export default {
  install(app) {
    app.component('Spinner', Spinner as Record<string, unknown>)
  }
} satisfies Plugin
