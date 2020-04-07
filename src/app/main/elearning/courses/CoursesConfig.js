import React from 'react';

const CoursesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/elearning/courses',
			component: React.lazy(() => import('./Courses'))
		}
	]
};

export default CoursesConfig;
