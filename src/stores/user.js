import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"
import { router } from '../router/index.js'

export const useUserStore = defineStore('user', {
    state() {
        return {
            logged: false,
            title: 'login',
            user: {
                name : 'Betsy Mougnagna'
            }
        }
    },
    persist: true,
    actions: {
        async login(credentials) {
            const token = (await apiRequester.post("/api/login", credentials)).data.token

            // Use the token for all future requests
            apiRequester.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // The user will be available in all our components via `this.$userStore.user` thanks to our custom appPlugin`
            this.user = (await apiRequester.get("/api/user/info")).data
            this.logged = true;
            router.push({ path: '/' })
        },
        async logOut(){
            this.logged = false;
            router.push({ path: '/login' })
        },
    }
})
