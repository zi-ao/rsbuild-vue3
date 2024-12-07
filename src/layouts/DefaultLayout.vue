<template>
  <div class="flex flex-col min-h-100vh light:bg-slate-50">
    <header class="shadow-sm py-3 sticky top-0 z-10 bg-white dark:bg-slate-800">
      <nav class="container flex">
        <router-link
          to="/"
          class="block font-bold text-xl leading-10"
        >
          LOGO
        </router-link>

        <n-button
          v-if="isMiniScreen"
          quaternary
          class="ml-auto px-2 h-40px"
          @click="handleShowNav"
        >
          <n-icon
            :component="Menu"
            size="24"
          />
        </n-button>

        <div
          class="nav-content"
          :class="showNav || !isMiniScreen ? 'translate-x-0' : 'translate-x-100%'"
        >
          <div
            v-if="isMiniScreen"
            class="text-xl flex pt-3 px-3 dark:border-slate-700"
          >
            <h4 class="leading-10">LOGO</h4>
            <n-button
              quaternary
              class="ml-auto px-2 h-40px"
              @click="handleHideNav"
            >
              <n-icon
                :component="Close"
                size="24"
              />
            </n-button>
          </div>
          <div class="flex flex-col pb-3 px-3 flex-auto m:flex-row m:py-0 m:pr-0 m:pl-10">
            <div class="nav-list">
              <div class="nav-item">
                <router-link
                  to="/"
                  class="block leading-10"
                >
                  首页
                </router-link>
              </div>
              <div class="nav-item">
                <router-link
                  to="/about"
                  class="block leading-10"
                >
                  关于我们
                </router-link>
              </div>
            </div>

            <div class="nav-list m:ml-auto">
              <div class="nav-item">
                <n-button
                  icon-placement="left"
                  class="w-full mt-3px px-2 h-34px"
                  @click="appStore.toggleDark()"
                >
                  <template #icon>
                    <n-icon
                      v-if="appStore.isDark"
                      :component="SunnyOutline"
                      :size="18"
                    />
                    <n-icon
                      v-else
                      :component="MoonOutline"
                      :size="18"
                    />
                  </template>
                  <template v-if="isMiniScreen">
                    {{ appStore.isDark ? '日间模式' : '夜间模式' }}
                  </template>
                </n-button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="showNav && isMiniScreen"
          class="fixed inset-0 z-9 bg-black opacity-50"
          @click="handleHideNav"
        />
      </nav>
    </header>
    <div class="flex-auto">
      <div class="container">
        <slot />
      </div>
    </div>
    <footer class="text-white py-4 px-3 bg-gray-700 dark:bg-slate-800">
      <div class="container">12312312</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Close, Menu, MoonOutline, SunnyOutline } from '@vicons/ionicons5';
import { useLoadingBar } from 'naive-ui';

const loadingBar = useLoadingBar();
const appStore = useAppStore();

const isMiniScreen = computed(() => !appStore.breakpoints.m);

const showNav = ref(false);
const handleShowNav = () => {
  if (isMiniScreen) {
    showNav.value = true;
  }
};
const handleHideNav = () => {
  showNav.value = false;
};

onMounted(() => {
  appStore.register({
    start: () => {
      loadingBar.start();
    },
    finish: () => {
      loadingBar.finish();
    },
  });
});
onBeforeUnmount(() => {
  appStore.register(null);
});
</script>
