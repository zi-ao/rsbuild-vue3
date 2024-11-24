<template>
  <component
    v-if="component"
    :is="component"
  >
    <slot />
  </component>
  <slot v-else />
</template>

<script setup lang="ts">
import layoutComponents from './import-layouts';
import type { LayoutProps } from './interface';

const { name } = defineProps<LayoutProps>();

const component = computed(() => {
  if (name === null) {
    return false;
  }

  let layoutName: string;
  if (name) {
    layoutName = /-layout$/.test(name) ? name : `${name}-layout`;
  } else {
    layoutName = 'default-layout';
  }
  return layoutComponents[layoutName] || false;
});
</script>
