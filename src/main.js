import './assets/style/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import {router} from './router'
import appPlugin from "./plugins/appPlugin.js"

const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(appPlugin)
    .mount('#app')
