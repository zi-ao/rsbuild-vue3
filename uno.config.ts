import presetRemToPx from '@unocss/preset-rem-to-px';
import { defineConfig, presetMini } from 'unocss';
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
    'nav-content':
      'flex flex-col left-auto w-sm max-w-95% bg-white dark:bg-slate-800 duration-300 fixed inset-0 z-10 m:static m:flex-1 m:!bg-transparent',
    'nav-list':
      'flex -mx-2 mt-3 pt-3 border-t dark:border-slate-700 m:inline-flex m:mt-0 m:pt-0 m:border-0',
    'nav-item': 'basis-1/2 px-2 m:basis-auto',
  },
  theme: {
    breakpoints: toBreakpoints(breakpoints),
  },
  presets: [presetRemToPx(), presetMini()],
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  },
});
