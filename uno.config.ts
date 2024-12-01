import presetRemToPx from '@unocss/preset-rem-to-px';
import { defineConfig, presetUno } from 'unocss';
import breakpoints from './src/components/c-config-provider/src/breakpoints';

const toBreakpoints = (breakpoints: Record<string, number>) => {
  const newBreakpoints = {};
  for (const key in breakpoints) {
    newBreakpoints[key] = `${breakpoints[key]}px`;
  }
  return newBreakpoints;
};

export default defineConfig({
  shortcuts: {
    container:
      'px-3 max-w-3xl mx-auto s:px-4 m:max-w-none m:w-992px l:w-1200px xl:w-1440px xxl:w-1600px',
  },
  theme: {
    breakpoints: toBreakpoints(breakpoints),
  },
  presets: [presetRemToPx(), presetUno()],
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  },
});
