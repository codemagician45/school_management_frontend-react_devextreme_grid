import React from 'react';
import { authRoles } from 'app/auth';

const DashboardConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/dashboard',
			component: React.lazy(() => import('./Dashboard'))
		}
	]
};

export default DashboardConfig;
