import { logoutUser } from 'app/auth/store/actions';
import store from 'app/store';
import { authRoles } from 'app/auth';

const LogoutConfig = {
	auth: authRoles.guest,
	routes: [
		{
			path: '/logout',
			component: () => {
				store.dispatch(logoutUser());
				return 'Logging out..';
			}
		}
	]
};

export default LogoutConfig;
