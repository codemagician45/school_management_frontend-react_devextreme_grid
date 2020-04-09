import React from 'react';

const SchoolsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/schools',
            component: React.lazy(() => import('./Schools'))
        }
    ]
};

export default SchoolsConfig;