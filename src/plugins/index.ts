import type { App } from 'vue';
import pinia from './pinia';
import router from './router';

export { pinia, router };

export default {
  install(app: App) {
    app.use(pinia).use(router);
  },
};
