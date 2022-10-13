import { createRouter, createWebHistory } from 'vue-router'
import Chats from '../views/Chats.vue'

const routes = [
    {
        path: '/',
        name: 'chats',
        component: Chats
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router