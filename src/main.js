import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import reset from 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import Home from './conf/Home.vue'
import None from './conf/404.vue'

import routes from './info/path.js'

Vue.use(ElementUI)
Vue.use(VueRouter)


import axios from 'axios'
// 将 axios 改写为 Vue 的原型属性,使在其它的组件中可以使用 axios
Vue.prototype.$axios = axios


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  	console.log('router-to:',to);
  	console.log('router-from:',from);
  	// console.log('router-next:',next);
  	// console.log('matched:',to.matched);

	if (to.matched.length === 0) {//如果未匹配到路由
		// from.name ? next({ name:from.name }) : next('/');
		next({ name:'none' })
	} else {
		let _nick = localStorage._nick;

		if((_nick=='' || _nick==undefined) && to.name!='login'){
			ElementUI.Message({
				message:'你还未登录',
				type:'warning',//success/warning/info/error
				duration:3000,
				showClose:true,
				onClose(){
					next({ name:'login', params: { go : to.name }});
				}
			});
		}else{
			next();//如果匹配到正确跳转
		}
	}
})

const app = new Vue({
	data:{
		programName:'Element-UI-excersize',
		version:'1.0.0'
	},
	router,
	created(){
		this.getMyData();
	},
	methods:{
		getMyData(){
			
		}
	},
	render: h => h(Home)
}).$mount('#app')