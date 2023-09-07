import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '~/pages/Page404View'


Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '*',
				component: Page404,
				name: 'default'
			},
		]
	})
}