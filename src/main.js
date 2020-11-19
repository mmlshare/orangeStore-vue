import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routers from './router.js'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import http from './http.js'

Vue.use(VueRouter)
Vue.use(ViewUI)

Vue.prototype.pig = http

// The routing configuration
const RouterConfig = {
    mode:'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})