import React from 'react';

const FairsConfigs = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/schools/fairs/fairs_list',
            component: React.lazy(() => import('./fairs-list/FairsList'))
        },
        {
            path: '/schools/fairs/create_fair',
            component: React.lazy(() => import('./new-fair/FairsCreate'))
        },
    ]
};

export default FairsConfigs;