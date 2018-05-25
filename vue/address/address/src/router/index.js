import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Home = resolve => require(['../components/Home.vue'], resolve)
let Address = resolve => require(['../components/Address.vue'], resolve)
let Err = resolve => require(['../components/Err.vue'], resolve)
let Add = resolve => require(['../components/Add.vue'], resolve)
let bianji = resolve => require(['../components/bianji.vue'], resolve)


export default new vueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/Address",
            component: Address
        },
        {
            path: "/Err",
            component: Err
        },
        {
            path: "/Add",
            component: Add
        },
        {
            path: "/bianji",
            component: bianji
        }
    ]
})