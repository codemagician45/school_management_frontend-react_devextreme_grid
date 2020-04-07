import React from 'react';
import { authRoles } from 'app/auth';

const ParentsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/people/parents',
			component: React.lazy(() => import('./Parents'))
		}
	]
};

export default ParentsConfig;
