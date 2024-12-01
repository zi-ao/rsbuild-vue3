import breakpoints from '@/components/c-config-provider/src/breakpoints';

export default defineStore('app', () => {
  const pausedRef = ref(false);

  let registerObj: null | { start: () => void; finish: () => void } = null;
  const startFn = () => {
    if (pausedRef.value) {
      pausedRef.value = false;
    } else {
      registerObj?.start();
    }
  };
  const finishFn = () => {
    if (pausedRef.value) {
      pausedRef.value = false;
    } else {
      registerObj?.finish();
    }
  };
  const registerFn = (obj: typeof registerObj) => {
    registerObj = obj;
  };

  const { width, height } = useWindowSize();
  const breakpointsRef = computed(() => {
    const breakpointsRef: Record<string, boolean> = {};
    for (const key in breakpoints) {
      breakpointsRef[key] =
        width.value >= breakpoints[key as keyof typeof breakpoints];
    }
    return breakpointsRef;
  });

  const isDark = useDark();

  return {
    isDark,
    windowWidth: width,
    windowHeight: height,
    paused: pausedRef,
    breakpoints: breakpointsRef,

    start: startFn,
    finish: finishFn,
    register: registerFn,
  };
});
