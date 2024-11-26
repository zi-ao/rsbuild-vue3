<template>
  <div class="flex flex-col min-h-100vh">
    <header class="shadow-sm">
      <nav class="px-3 max-w-7xl mx-auto s:px-4">1231231</nav>
    </header>
    <div class="flex-auto">
      <div class="px-3 max-w-7xl mx-auto s:px-4">
        <slot />
      </div>
    </div>
    <footer class="text-white py-4 px-3 bg-gray-700">
      <div class="px-3 max-w-7xl mx-auto s:px-4">12312312</div>
    </footer>
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
