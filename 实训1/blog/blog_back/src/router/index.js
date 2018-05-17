import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Login = resolve => require(['../components/login.vue'], resolve)
let back = resolve => require(['../components/main/index.vue'], resolve)
let main = resolve => require(['../components/main/main.vue'], resolve)

let add_one_class = resolve => require(['../components/main/add_one_class.vue'], resolve)
let add_two_class = resolve => require(['../components/main/add_two_class.vue'], resolve)
let class_list = resolve => require(['../components/main/class_list.vue'], resolve)
let change_one_class = resolve => require(['../components/main/change_one_class.vue'], resolve)
let change_two_class = resolve => require(['../components/main/change_two_class.vue'], resolve)

let add_article = resolve => require(['../components/article/add_article.vue'], resolve)
let article_list = resolve => require(['../components/article/article_list.vue'], resolve)
let change_article = resolve => require(['../components/article/change_article.vue'], resolve)

let api_add = resolve => require(['../components/module/api_add'], resolve)
let api_add_front = resolve => require(['../components/module/api_add_front.vue'], resolve)
let api_add_back = resolve => require(['../components/module/api_add_back.vue'], resolve)
let changeapi = resolve => require(['../components/module/changeapi.vue'], resolve)

export default new vueRouter({
    routes: [{
            path: "/",
            component: Login,
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/back",
            component: back,
            children: [{
                    path: "/back",
                    redirect: "main",
                    component: main
                },
                {
                    path: "main",
                    component: main
                },
                {
                    path: "add_one_class",
                    component: add_one_class
                },
                {
                    path: "add_two_class",
                    component: add_two_class
                },
                {
                    path: "class_list",
                    component: class_list
                },
                {
                    path: "change_one_class",
                    component: change_one_class
                },
                {
                    path: "change_two_class",
                    component: change_two_class
                },
                {
                    path: "add_article",
                    component: add_article
                },
                {
                    path: "article_list",
                    component: article_list
                },
                {
                    path: "change_article/:id",
                    component: change_article
                },
                {
                    path: 'api_add',
                    component: api_add
                },
                {
                    path: 'api_add_front',
                    component: api_add_front
                },
                {
                    path: 'api_add_back',
                    component: api_add_back
                },
                {
                    path: 'changeapi',
                    component: changeapi
                }
            ]
        }
    ]
})