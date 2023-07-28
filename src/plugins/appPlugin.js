import {useUserStore} from "../stores/user.js"

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$userStore`
        app.config.globalProperties.$userStore = useUserStore()
    }
}
