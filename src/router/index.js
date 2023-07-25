import {createRouter, createWebHistory} from 'vue-router'
import BaseLayout from '../components/BaseLayout.vue'
import HomePage from '../pages/home/HomePage.vue'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: BaseLayout,
            children: [
                {
                    path: "",
                    name: "home",
                    component: HomePage
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (login.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/login/LoginPage.vue')
        }
    ]
})
