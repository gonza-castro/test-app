import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
	routes: (_routes) => [
		
		{
			path: '/404',
			component: () => import('~/pages/404.vue').then(r => r.default || r),
		},
		
		
	],
}