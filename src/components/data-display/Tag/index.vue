<script lang="ts">
export default {
  name: 'Tag'
}
</script>

<script setup lang="ts">
import type { Props } from './types'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  color: 'normal',
  bordered: false,
  hovered: false
})
</script>

<template>
  <span
    :class="[
      $style['tag'],
      $style[`tag--color-${props.color}`],
      { [$style['tag--border']]: props.bordered, [$style['tag--hover']]: props.hovered }
    ]"
  >
    <slot />
  </span>
</template>

<style module lang="scss">
@use './style.scss';
</style>
