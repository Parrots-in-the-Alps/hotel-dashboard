import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useDataStore = defineStore('data', {
    state() {
        return {
            data: null
        }
    },
    actions: {
        
    }
})