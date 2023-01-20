import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import userlog from "./singleton/userlog";

VueElement.prototype.$userlog = userlog;

createApp(App).use(router).mount('#app')
