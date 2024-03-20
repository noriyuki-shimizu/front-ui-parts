import type { Plugin } from 'vue'
import Empty from './Empty/index.vue'
import InfiniteScrollList from './InfiniteScrollList/index.vue'
import ListDetail from './ListDetail/index.vue'
import ListRecord from './ListRecord/index.vue'
import Tag from './Tag/index.vue'

export default {
  install(app) {
    app.component('Empty', Empty as Record<string, unknown>)
      .component('InfiniteScrollList', InfiniteScrollList as unknown as Record<string, unknown>)
      .component('ListDetail', ListDetail as Record<string, unknown>)
      .component('ListRecord', ListRecord as Record<string, unknown>)
      .component('Tag', Tag as Record<string, unknown>)
  }
} satisfies Plugin
