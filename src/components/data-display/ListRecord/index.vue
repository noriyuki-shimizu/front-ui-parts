<script setup lang="ts">
import type { Props } from './types'
import Link from '@/components/core/Link/index.vue'
import { LangUtil } from '@/utils/core'

/** Props */
const props = defineProps<Props>()

const { ariaLabel, ...anchorHTMLAttributes } = props.linkBridge ?? {}
</script>

<template>
  <article :class="$style['list-record']">
    <template v-if="!LangUtil.isNull(linkBridge)">
      <Link :class="$style['list-record__link-bridge']" :aria-label="ariaLabel" v-bind="anchorHTMLAttributes" />
    </template>
    <div :class="$style['list-record__container']">
      <div v-if="$slots.leftAside" :class="$style['list-record__left-aside']">
        <slot name="leftAside" />
      </div>
      <slot />
    </div>
  </article>
</template>

<style module lang="scss">
@use './style.scss';
</style>
