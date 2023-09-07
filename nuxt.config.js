export default {

	server: {
		host: '0.0.0.0',
		port: 3000, // default: 3000
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Timbo Tablas',
		htmlAttrs: {
			lang: 'es'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
    	{ src: '~/plugins/axios.js' },
		{ src: '~/plugins/vuejs-paginate.js', mode: 'client' }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/router',
		'@nuxtjs/style-resources',
    	'@nuxtjs/dotenv'
	],

	styleResources: {
		scss: [
		],
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: process.env.VUE_APP_SSR_API_URL,
		browserBaseURL: process.env.VUE_APP_API_URL
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
