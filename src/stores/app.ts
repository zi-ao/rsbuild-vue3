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

  return {
    paused: pausedRef,

    start: startFn,
    finish: finishFn,
    register: registerFn,
  };
});
