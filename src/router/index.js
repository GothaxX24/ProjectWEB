import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import FirstPage from '../views/FirstPage.vue'
import Chats from '../views/Chats.vue'
import CreateEvent from '../views/CreateEvent.vue'
import EventHistory from '../views/EventHistory.vue'
import EventsList from '../views/EventsList.vue'
import Friends from '../views/Friends.vue'
import inChat from '../views/inChat.vue'
import Profile from '../views/Profile.vue'
import Statistics from '../views/Statistics.vue'
import ViewEvent from '../views/ViewEvent.vue'
import ViewProfile from '../views/ViewProfile.vue'
import MyEvents from '../views/MyEvents.vue'
import AddCommentary from '../views/AddCommentary.vue'

const routes = [
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
    {
        path: '/',
        name: 'firstpage',
        component: FirstPage,
    },
    {
        path: '/chats',
        name: 'chats',
        component: Chats,
    },
    {
        path: '/createevent',
        name: 'createevent',
        component: CreateEvent,
    },
    {
        path: '/eventhistory',
        name: 'eventhystory',
        component: EventHistory,
    },
    {
        path: '/eventslist',
        name: 'eventslist',
        component: EventsList,
    },
    {
        path: '/friends',
        name: 'friends',
        component: Friends,
    },
    {
        path: '/inchat',
        name: 'inchat',
        component: inChat,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: Statistics,
    },
    {
        path: '/viewevent',
        name: 'viewevent',
        component: ViewEvent,
    },
    {
        path: '/viewprofile',
        name: 'viewprofile',
        component: ViewProfile,
    },
    {
        path: '/myevents',
        name: 'myevents',
        component: MyEvents,
    },
    {
        path: '/addcomentary',
        name: 'addcomentary',
        component: AddCommentary,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router