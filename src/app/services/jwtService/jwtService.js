import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {
		const access_token = this.getAccessToken();
		console.log("here is handleauth", access_token)
		if (!access_token) {
			this.emit('onNoAccessToken');

			return;
		}
		// console.log("here is isAuthTokenValid", this.isAuthTokenValid(access_token))
		if (this.isAuthTokenValid(access_token)) {
			console.log("here is isAuthTokenValid", this.isAuthTokenValid(access_token))
			this.setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	signInWithEmailAndPassword = (email, password) => {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/auth', {
					data: {
						email,
						password
					}
				})
				.then(response => {
					if (response.data.user) {
						console.log(response.data.user)
						this.setSession(response.data.access_token, response.data.user.uuid, response.data.user.role, response.data.user.data.university_id, response.data.user.data.id);
						resolve(response.data.user);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	signInWithToken = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/auth/access-token', {
					data: {
						access_token: this.getAccessToken()
					}
				})
				.then(response => {
					console.log("withtoken signin", response)
					if (response.data.user) {

						this.setSession(response.data.access_token, response.data.user.uuid, response.data.user.role);
						resolve(response.data.user);
					} else {
						this.logout();
						Promise.reject(new Error('Failed to login with token.'));
					}
				})
				.catch(error => {
					console.log("withtokenerror", error)
					this.logout();
					Promise.reject(new Error('Failed to login with token.'));
				});
		});
	};

	updateUserData = user => {
		return axios.post('/api/auth/user/update', {
			user
		});
	};

	setSession = (access_token, id, role, uni_id, user_id) => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			localStorage.setItem('uuid', id);
			localStorage.setItem('role', role);
			localStorage.setItem('uni_id', uni_id)
			localStorage.setItem('user_id', user_id)
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		}
		else {
			localStorage.removeItem('jwt_access_token');
			localStorage.removeItem('uuid');
			localStorage.removeItem('role');
			localStorage.removeItem('uni_id')
			localStorage.removeItem('user_id')
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		localStorage.removeItem('jwt_access_token');
		localStorage.removeItem('uuid');
		localStorage.removeItem('role');
		localStorage.removeItem('uni_id')
		localStorage.removeItem('user_id')

	};

	isAuthTokenValid = access_token => {
		if (!access_token) {
			return false;
		}
		const decoded = jwtDecode(access_token);
		console.log("tokendate", decoded);
		const currentTime = Date.now() / 1000;
		console.log("currenttime", currentTime)
		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}

		return true;

	};

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};

	getUserUuid = () => {
		return window.localStorage.getItem('uuid');
	};

	getUserRole = () => {
		return window.localStorage.getItem('role');
	};
}

const instance = new JwtService();

export default instance;
