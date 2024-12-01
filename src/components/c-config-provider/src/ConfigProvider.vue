<template>
  <n-config-provider
    abstract
    inline-theme-disabled
    preflight-style-disabled
    :breakpoints="breakpoints"
    :date-locale="dateZhCN"
    :locale="zhCN"
    :theme="appStore.isDark ? darkTheme : null"
    :theme-overrides="appStore.isDark ? darkThemeOverrides : lightThemeOverrides"
  >
    <n-global-style />

    <n-loading-bar-provider>
      <slot />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
import breakpoints from './breakpoints';
import { darkThemeOverrides, lightThemeOverrides } from './theme-overrides';

const appStore = useAppStore();
</script>
