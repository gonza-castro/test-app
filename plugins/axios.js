export default function ({ $axios, redirect, store, app }) {
	$axios.onError(error => {
        return new Promise((resolve, reject) => {
			console.log("-----------------------------------")
			console.log("-----------------------------------")
			console.log("-----------------------------------")
			console.log("AXIOS ERROR (Interceptor)")
			console.log(error);
			console.log(error.response && error.response.status);

			if(error.response && error.response.status) {
				switch( error.response.status ) {
					case 419:
					case 403:
					case 401:
						redirect('/login');
						break;

					case 404:
						redirect('/404');
						break;

			        case 409:
						redirect('/verify');
						break;

					case 422:
			            store.dispatch('alerts/addAlert', {
			                level: 'error',
			                message: app.i18n.t('valid.error')
			            });
						break;


		            default:
			            store.dispatch('alerts/addAlert', {
			                level: 'error',
			                message: error.response.data.errors ? error.response.data.errors.message : 'Hemos encontrado un error, por favor, intenta nuevamente o contacta a un administrador a soporte@regality.com',
			                duration: error.response.data.errors ? error.response.data.errors.duration : 20000,
			            });
						break;

				}
			} else {
	            store.dispatch('alerts/addAlert', {
	                level: 'error',
	                message: error.response.data.errors ? error.response.data.errors.message : 'Hemos encontrado un error, por favor, intenta nuevamente o contacta a un administrador a soporte@regality.com',
	                duration: error.response.data.errors ? error.response.data.errors.duration : 20000,
	            });
			}
			reject( error.response.data);
		});
	})


	$axios.onRequest( config => {
		
        return new Promise((resolve, reject) => {

			$axios.setHeader('Access-Control-Allow-Origin', '*');
			$axios.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			$axios.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
			$axios.setHeader('Rav', process.env.VUE_APP_REQUIRED_API_VERSION);
			
        	// Authorization Token
			/*let token = store.getters['auth/idToken'];
			if( token !== null ) {
				$axios.setToken(token, 'Bearer');
			}*/
			
            resolve(config);
        });
	})

    
	$axios.onResponse( response => {
        /*console.log("response")
        console.log(response)*/
	})
}