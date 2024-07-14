<script setup lang="ts">
import type { Props } from './types'
import SearchIconSvg from '@/assets/svg/search-icon.svg?component'

/** Props */
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'タイトル検索',
  size: 'medium',
  inputAriaLabel: '検索フィールド',
  buttonAriaLabel: '検索ボタン'
})

/** 入力値 */
const model = defineModel<string | null>({ required: true })
</script>

<template>
  <div :class="$style['input-search']">
    <input
      v-model="model"
      type="text"
      :placeholder="props.placeholder"
      :class="[$style['input-search__input'], $style[`input-search__input--${$props.size}`]]"
      :aria-label="props.inputAriaLabel"
    />
    <button type="submit" title="search" :class="$style['input-search__button']" :aria-label="props.buttonAriaLabel">
      <SearchIconSvg :class="$style['input-search__icon']" />
    </button>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
