import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Mine from '@/components/Min'
import Me from '@/components/Me'
import Home from '@/components/Home'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/list',
			component:List
		},
		{
			path:'/mine',
			component:Mine
		},
		{
			path:'/me',
			component:Me
		},
		{
			path:'/',
			component:Home
		}

	]
	

})
