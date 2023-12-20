import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/vue-router.js'
import store from '@/store'
import i18n from '../i18n'

const onLoad = () => {
    createApp(App)
        .use(router)
        .use(store)
        .use(i18n)
        .mount('#app')
}

window.onload = onLoad
