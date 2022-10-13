import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import FirstPage from '../views/FirstPage.vue'

const routes = [
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/firstpage',
        name: 'firstpage',
        component: FirstPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router