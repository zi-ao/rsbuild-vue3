<template>
  <n-result
    status="404"
    title="404 资源不存在"
    class="pt-30 pb-10"
  >
    <template #footer>
      <n-button @click="$router.back()">返回上一页</n-button>
    </template>
  </n-result>
</template>
