import * as R from 'vue-router'
import routes from '@/assets/routes.js'

const router = R.createRouter({
    history: R.createWebHistory(),
    routes,
})

export default router
