<script setup lang="ts">
import type { Props } from './types'
import { createAnchorHTMLAttributes } from './utils'

/** Props */
const props = defineProps<Props>()

/** a タグの Attribute */
const anchorHTMLAttributes = createAnchorHTMLAttributes(props)
</script>

<template>
  <a v-bind="anchorHTMLAttributes"><slot /></a>
</template>
