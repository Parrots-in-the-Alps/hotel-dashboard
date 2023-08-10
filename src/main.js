// Global style for our app
import './assets/style/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import {router} from './router'

// Global plugins for our app
import appPlugin from "./plugins/appPlugin.js"
import antDesignPlugin from "@/plugins/antDesignPlugin.js"

const app = createApp(App)
export const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
    .use(router)
    .use(antDesignPlugin)
    .use(appPlugin)
    .mount('#app')
