import React from 'react';

const TestsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/elearning/tests',
			component: React.lazy(() => import('./Tests'))
		}
	]
};

export default TestsConfig;
