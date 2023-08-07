import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"
import { router } from '../router/index.js'

export const useUserStore = defineStore('user', {
    state() {
        return {
            logged: true,
            user: {
                name : 'Betsy Mougnagna'
            }
        }
    },
    actions: {
        async login(credentials) {
            console.log('toto fait des galipètes avec ses reins')
            const token = (await apiRequester.post("/api/login", credentials)).data.token

            // Use the token for all future requests
            apiRequester.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // The user will be available in all our components via `this.$userStore.user` thanks to our custom appPlugin`
            this.user = (await apiRequester.get("/api/user/info")).data
            this.logged = true;
            router.push({ path: '/tactics' })
            console.log(this)
        },
        async logOut(){
            this.logged = false;
            router.push({ path: '/login' })
            console.log('toto mange de grands bols de bites')
        },
    }
})
