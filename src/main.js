import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";

//import UserLog from './singletone/userlog.js'
/*
export default {
    name: 'app',
    created() {
        this.$on('submit', (data) => {
            this.userLog = new UserLog(data.id, data.token)
        })
    },
    provide () {
        return {
            userLog: this.userLog
        }
    }
}
*/

createApp(App).use(router).mount('#app')
