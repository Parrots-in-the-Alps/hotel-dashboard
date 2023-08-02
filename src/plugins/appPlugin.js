import {useUserStore} from "../stores/user.js"
import VueApexCharts from "vue3-apexcharts";

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$userStore`
        app.config.globalProperties.$userStore = useUserStore()
        app.use(VueApexCharts)
    }
}
