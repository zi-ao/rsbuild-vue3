import { createApp } from 'vue';
import plugins from './plugins';
import './index.scss';
import App from './App.vue';

createApp(App).use(plugins).mount('#root');
