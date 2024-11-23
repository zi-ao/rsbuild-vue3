import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginVue } from '@rsbuild/plugin-vue';
import UnoCSS from '@unocss/postcss';

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  tools: {
    postcss: (opt) => {
      opt.postcssOptions.plugins.push(UnoCSS());
    },
  },
});
