import {useUserStore} from "../stores/user.js";
import {useDataStore} from "../stores/data.js"
import html2pdf from "html2pdf.js";
import VueApexCharts from "vue3-apexcharts";

export default {
    install(app, options) {
        // Be able to use the store in all components via `this.$userStore`
        app.config.globalProperties.$userStore = useUserStore();
        app.config.globalProperties.$dataStore = useDataStore();
        app.use(html2pdf);
        app.use(VueApexCharts);
    }
}
