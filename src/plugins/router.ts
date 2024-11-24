import { createRouter, createWebHistory } from 'vue-router';
import pinia from './pinia';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/index.vue'),
    },
    {
      name: 'notFound',
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404.vue'),
      meta: { layout: 'inherit' },
    },
  ],
});

const appStore = useAppStore(pinia);

router.beforeEach(() => {
  appStore.start();
});

router.afterEach(() => {
  appStore.finish();
});

export default router;
