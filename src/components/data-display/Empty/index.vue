<script lang="ts">
export default {
  name: 'Empty'
}
</script>

<script setup lang="ts">
import type { Props } from './types'
import EmptyIconSvg from '@/assets/svg/empty.svg?component'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  noImage: false
})
</script>

<template>
  <div :class="$style['empty']">
    <template v-if="!props.noImage">
      <slot name="image">
        <EmptyIconSvg />
      </slot>
    </template>
    <span :class="$style['empty__description']">
      <slot name="description">No data</slot>
    </span>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
