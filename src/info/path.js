import None from '../conf/404.vue'
import Login from '../conf/login.vue'
import Index from '../conf/index.vue'

import ActivityList from '../conf/activityList.vue'
import SystemManage from '../conf/systemManage.vue'

export default [
	{ name:'index', path: '/', component: Index },
	{ name:'login', path: '/login', component: Login },
	{ name:'none', path: '/404', component: None },
	{ name:'activityList', path: '/activityList', component: ActivityList },
	{ name:'systemManage', path: '/systemManage', component: SystemManage },
]
