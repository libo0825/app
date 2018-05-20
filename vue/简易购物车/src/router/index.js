import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Home = resolve => require(['../components/main/Home.vue'], resolve)
let Detail = resolve => require(['../components/main/Detail.vue'], resolve)
let Shopcar = resolve => require(['../components/main/Shopcar.vue'], resolve)
let Personal = resolve => require(['../components/main/Personal.vue'], resolve)


export default new vueRouter({
    routes: [
        {
            path: "/",
            redirect:'/home'
        },
        {
            path: "/home",
            name:'home',
            component: Home
        },
        {
            path: "/detail",
            component: Detail
        },
        {
            path: "/shopcar",
            name:'shopcar',
            component: Shopcar
        },
        {
            path: "/personal",
            component: Personal
        }
    ]
})
