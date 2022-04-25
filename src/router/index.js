import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue"
import About from "../views/About.vue"
import User from "../views/User.vue"

const routes = [
    {path: '/', 
    name: 'home', 
    component: Home},

    {path: '/about', 
    name: 'About', 
    component: About},

    {path: '/user', 
    name: 'User', 
    component: User},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router