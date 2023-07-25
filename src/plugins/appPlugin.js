import {useUserStore} from "../stores/user.js";

export default {
    install(app, options) {
        app.config.globalProperties.$userStore = useUserStore()
    }
}
