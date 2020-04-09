import React from 'react';

const UniversityProfileConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/profile/university',
            component: React.lazy(() => import('./UniversityProfile'))
        }
    ]
};

export default UniversityProfileConfig;