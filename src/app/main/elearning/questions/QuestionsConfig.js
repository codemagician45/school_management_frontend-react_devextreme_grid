import React from 'react';

const QuestionsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/elearning/questions',
			component: React.lazy(() => import('./Questions'))
		}
	]
};

export default QuestionsConfig;
