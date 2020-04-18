import React from 'react';

const UniversityConfigs = {
    settings: {
        layout: {
            config: {}
        }
    },

    routes: [
        {
            path: '/schools/univerisites/univerisities_list',
            component: React.lazy(() => import('./university-list/UniversityList'))
        },
        {
            path: '/schools/univerisites/confirmed_universities',
            component: React.lazy(() => import('./confirmed-university/ConfirmedUniversity'))
        },
    ]
}

export default UniversityConfigs;