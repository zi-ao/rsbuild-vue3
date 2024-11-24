/// <reference types="@rsbuild/core/types" />
import 'vue-router';

interface ImportMetaEnv {
  // 应用标题
  readonly APP_TITLE: string;
  // 应用 API 请求 baseURL
  readonly APP_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'vue-router' {
  interface RouteMeta {
    // 当前路由使用的布局，设置为 null 不使用任何布局，设置为 inherit 将继承上一页使用的布局
    // 匹配 /src/layouts/ 目录下满足 *{Layout|-layout}.{vue,tsx} 规则的文件
    // 无论布局文件文件时是否为 kebab-case 命名方式，layout 值使用 kebab-case 方式（可省略 -layout）
    // 如使用 /src/layouts/DefaultLayout.vue 布局文件，layout 值需要为：default-layout 或 default
    layout?: string | null | 'inherit';
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint: .vue 文件支持
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
