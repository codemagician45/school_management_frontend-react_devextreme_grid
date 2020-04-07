import React from 'react';

const LessonsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/elearning/lessons',
			component: React.lazy(() => import('./Lessons'))
		}
	]
};

export default LessonsConfig;
