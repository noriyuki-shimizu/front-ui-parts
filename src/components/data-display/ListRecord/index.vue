<script setup lang="ts">
import { LangUtil } from '@/utils/core'
</script>

<template>
  <div :class="$style['list-detail']">
    <div v-if="!LangUtil.isUndefined($slots.img)" :class="$style['list-detail__img_wrapper']">
      <slot name="img" />
    </div>
    <div
      :class="[
        $style['list-detail__body'],
        { [$style['list-detail__body--shift-right']]: !LangUtil.isUndefined($slots.img) }
      ]"
    >
      <div v-if="!LangUtil.isUndefined($slots.leftAside)" :class="$style['list-detail__left-aside']">
        <slot name="leftAside" />
      </div>
      <article :class="$style['list-detail__container']">
        <header v-if="!LangUtil.isUndefined($slots.header)" :class="$style['list-detail__header']">
          <slot name="header" />
        </header>
        <h2 :class="$style['list-detail__title']">
          <slot name="title">タイトル</slot>
        </h2>
        <div v-if="!LangUtil.isUndefined($slots.description)" :class="$style['list-detail__description-wrapper']">
          <p :class="$style['list-detail__description']">
            <slot name="description" />
          </p>
        </div>
        <footer v-if="!LangUtil.isUndefined($slots.footer)" :class="$style['list-detail__footer']">
          <slot name="footer" />
        </footer>
      </article>
    </div>
  </div>
</template>

<style module lang="scss">
@use './style.scss';
</style>
