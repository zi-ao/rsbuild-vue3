<template>
  <div class="min-h-100vh">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useLoadingBar } from 'naive-ui';

const loadingBar = useLoadingBar();
const appStore = useAppStore();

onMounted(() => {
  appStore.register({
    start: () => {
      loadingBar.start();
      console.log(111);
    },
    finish: () => {
      loadingBar.finish();
    },
  });
});
onBeforeUnmount(() => {
  appStore.register(null);
});
</script>
