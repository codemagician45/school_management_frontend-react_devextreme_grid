import React from 'react';
import { authRoles } from 'app/auth';

const FrontOfficeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/frontoffice',
			component: React.lazy(() => import('./FrontOffice'))
		}
	]
};

export default FrontOfficeConfig;
