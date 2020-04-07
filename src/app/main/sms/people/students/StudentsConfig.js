import React from 'react';
import { authRoles } from 'app/auth';

const StudentsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/people/students',
			component: React.lazy(() => import('./Students'))
		}
	]
};

export default StudentsConfig;
