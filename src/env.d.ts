/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint: .vue 文件支持
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
