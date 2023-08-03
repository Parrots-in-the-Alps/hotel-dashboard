import {createRouter, createWebHistory} from 'vue-router'
import BaseLayout from '../pages/BaseLayout.vue'
import Ops from '/home/pierre/projects/hotel-dashboard/src/pages/Dashboards/Ops.vue'
import Tactics from '../pages/Dashboards/Tactics.vue'
import Strategics from '../pages/Dashboards/Strategics.vue'
import HomePage from '../pages/home/HomePage.vue'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: BaseLayout, // The root of all our components, where the fixed elements will be (navbar...)
            children: [
                {
                    path: "",
                    name: "home",
                    component: HomePage
                },
                {
                    path: "/ops",
                    name: "ops",
                    component: Ops
                },
                {
                    path: "/tactics",
                    name: "tactics",
                    component: Tactics
                },
                {
                    path: "/strategics",
                    name: "strategics",
                    component: Strategics
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
