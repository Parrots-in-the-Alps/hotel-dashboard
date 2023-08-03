import Antd from 'ant-design-vue';

import {theme} from 'ant-design-vue'
const {defaultAlgorithm, defaultSeed} = theme
// exporting the theme to provide it to our entire website
export const customTheme = {
    // Customize the theme here with your own style (see https://antdv.com/theme-editor)
    


}

// This will recompute colors and their variants based on our custom values
const mapToken = defaultAlgorithm({
    ...defaultSeed,
    ...customTheme
})

export default {
    install(app, options) {
        app.use(Antd) // Use all components on-demand

        app.config.globalProperties.$theme = mapToken
    }
}
