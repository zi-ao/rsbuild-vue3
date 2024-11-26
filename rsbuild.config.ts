import { resolve as _resolve } from 'node:path';
import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginVue } from '@rsbuild/plugin-vue';
import UnoCSS from '@unocss/postcss';
import AutoImport from 'unplugin-auto-import/rspack';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import VueComponents from 'unplugin-vue-components/rspack';

const resolve = (...paths: string[]) => _resolve(__dirname, ...paths);

const { parsed, publicVars } = loadEnv({ prefixes: ['APP_'] });

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  html: {
    title: parsed.APP_TITLE,
    meta: [{ name: { name: 'naive-ui-style' } }],
  },
  source: {
    define: publicVars,
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            'pinia',
            '@vueuse/core',
            {
              '@/composables': ['useRequest'],
              '@/stores': ['useAppStore'],
              'lodash-es': [
                'isNil',
                'isUndefined',
                'isNull',
                'isString',
                'isNumber',
                'isBoolean',
                'isFunction',
                'isArray',
                'isMap',
                'isSet',
                'isSymbol',
                'isEmpty',
                'pick',
                'omit',
                'clone',
                'cloneDeep',
              ],
            },
          ],
          dts: resolve('.temp/auto-imports.d.ts'),
        }),
        VueComponents({
          resolvers: [
            NaiveUiResolver(),
            {
              type: 'component',
              resolve: (name) => {
                if (name.match(/^(C[A-Z]|c-[a-z])/)) {
                  return {
                    from: `@/components/${name.replace(/([A-Za-z])([A-Z])/g, '$1-$2').toLowerCase()}`,
                  };
                }
              },
            },
          ],
          dts: resolve('.temp/components.d.ts'),
        }),
      ],
    },
    postcss: {
      postcssOptions: {
        plugins: [UnoCSS()],
      },
    },
  },
});
