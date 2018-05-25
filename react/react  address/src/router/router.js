import Home from "../components/Home"
import Wd from "../components/Wd"
import Gwc from "../components/Gwc"
import Fl from "../components/Fl"
import City from "../components/Home/City"
import TopCity from "../components/Home/TopCity"



const routers = {
    navs: [
        {
            title: "首页",
            to: "/",
            icon: "iconfont  icon-shouye"
        },
        {
            title: "分类",
            to: "/fl",
            icon: "iconfont  icon-huowu"
        },
        {
            title: "购物车",
            to: "/gwc",
            icon: "iconfont  icon-gouwuche01"
        },
        {
            title: "我的",
            to: "/wd",
            icon: "iconfont  icon-wode"
        },
    ],
    views: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/gwc",
            component: Gwc
        },
        {
            path: "/fl",
            component: Fl
        },
        {
            path: "/wd",
            component: Wd
        },
        {
            path: "/city",
            component: City
        },
        {
            path: "/topCity",
            component: TopCity
        },
    ]
}
export default routers