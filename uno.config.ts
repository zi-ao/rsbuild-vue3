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
  theme: {
    breakpoints: toBreakpoints(breakpoints),
  },
  presets: [presetUno()],
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  },
});
