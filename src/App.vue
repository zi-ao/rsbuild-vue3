<template>
  <c-config-provider>
    <c-layout :name="layoutName">
      <router-view />
    </c-layout>
  </c-config-provider>
</template>

<script setup lang="ts">
const route = useRoute();

const layoutName = ref('default');

watch(
  () => route.path,
  () => {
    const { layout = 'default' } = route.meta;
    if (layout === 'inherit') return;
    if (layout !== layoutName.value) {
      layoutName.value = layout;
    }
  },
  { immediate: true },
);
</script>
