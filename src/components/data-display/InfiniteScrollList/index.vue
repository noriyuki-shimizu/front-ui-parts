<script setup lang="ts" generic="T extends unknown[]">
import { useInfiniteScroll } from '@vueuse/core'
import { ref } from 'vue'
import type { Props } from './types'
import Empty from '@/components/data-display/Empty/index.vue'
import Spinner from '@/components/feedback/Spinner/index.vue'
import { LangUtil } from '@/utils/core'

/** Props */
const props = withDefaults(defineProps<Props<T>>(), {
  height: '1000px'
})

/** リストの大枠要素 */
const listElement = ref<HTMLElement | null>(null)

/** ページ番号 */
const page = ref<number>(1)

/** 無限スクロールにおける読み込み完了フラグ */
const isFinish = ref<boolean>(false)

/** 無限スクロールにおける読み込み中フラグ */
const { isLoading } = useInfiniteScroll(
  listElement,
  async () => {
    if (isFinish.value) {
      return
    }
    isFinish.value = await props.onLoad(++page.value)
  },
  { distance: 10 }
)
</script>

<template>
  <section ref="listElement" tabindex="0" :class="$style['infinite-scroll-list']" :style="{ height: props.height }">
    <template v-if="LangUtil.isEmpty(props.items)">
      <Empty id="infinite-scroll-list-display-empty-data" :class="$style['infinite-scroll-list__empty']">
        <template #description>
          <slot name="emptyDescription" />
        </template>
      </Empty>
    </template>
    <template v-else>
      <div id="infinite-scroll-list-display-data">
        <template v-for="item in props.items" :key="item.id">
          <slot name="record" :item="item" />
        </template>
        <div v-show="isLoading && !isFinish" :class="$style['infinite-scroll-list__spinner-wrapper']">
          <Spinner />
        </div>
      </div>
    </template>
  </section>
</template>

<style module lang="scss">
@use './style.scss';
</style>
