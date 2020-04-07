import React from 'react';
import { authRoles } from 'app/auth';

const TeachersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/people/teachers',
			component: React.lazy(() => import('./Teachers'))
		}
	]
};

export default TeachersConfig;
