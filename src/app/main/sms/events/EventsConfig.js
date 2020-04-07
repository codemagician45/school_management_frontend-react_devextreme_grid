import React from 'react';
import { authRoles } from 'app/auth';

const EventsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/sms/events',
			component: React.lazy(() => import('./Events'))
		}
	]
};

export default EventsConfig;
