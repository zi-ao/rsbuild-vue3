<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    preflight-style-disabled
    :breakpoints="breakpoints"
    :date-locale="dateZhCN"
    :locale="zhCN"
  >
    <n-global-style />

    <n-loading-bar-provider>
      <slot />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui';
import breakpoints from './breakpoints';
</script>
