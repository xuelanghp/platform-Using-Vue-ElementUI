import Vue from 'vue'
import ElementUI from 'element-ui'
import reset from 'reset-css'
import 'element-ui/lib/theme-chalk/index.css'
import Sign from './conf/sign.vue'

Vue.use(ElementUI)

const app = new Vue({
	el:'#app',
	data:{
		programName:'Element-UI-excersize',
		version:'1.0.0'
	},
	created(){
		this.getMyData();
	},
	methods:{
		getMyData(){
			console.log('123')
		}
	},
	render: h => h(Sign)
})