import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: null
        }
    },
    actions: {
        async login(credentials) {
            const token = (await apiRequester.post("/api/sanctum/token", credentials)).data

            // Use the token for all future requests
            apiRequester.defaults.headers.common['Authorization'] = `Bearer ${token}`

            // The user will be available in all our components via `this.$userStore.user` thanks to our custom appPlugin`
            this.user = (await apiRequester.get("/api/user")).data
        }
    }
})
