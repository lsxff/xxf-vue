import { createApp } from 'vue'
import App from './App.vue'
import './xff';
import router from './router';

const app = createApp(App)
app.use(router);
app.mount('#app');
