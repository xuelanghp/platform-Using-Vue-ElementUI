export default [
	[
		{ name:'activityList', path: '/activityList', params:{line:1}, label:'活动管理' },
	],
	[
		{ name:'systemManage', path: '/systemManage', params:{line:2}, label:'系统管理' }
	],
	[
		[{ name:'index', path: '/', params:{line:3-1}, label:'首页3-1' }],
		[{ name:'index', path: '/', params:{line:3-2}, label:'首页3-2' }],
		[{ name:'index', path: '/', params:{line:3-3}, label:'首页3-3' }],
		[
			[{ name:'index', path: '/', params:{line:3-4-1}, label:'首页3-4-1' }],
			[{ name:'index', path: '/', params:{line:3-4-2}, label:'首页3-4-2' }],
			[{ name:'index', path: '/', params:{line:3-4-3}, label:'首页3-4-3' }],
		]
	],
]
