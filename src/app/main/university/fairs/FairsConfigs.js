import React from 'react';

const FairsConfigs = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/fairs/fairs',
            component: React.lazy(() => import('./fairs/Fairs'))
        },
        {
            path: '/university/fairs/past-confirmed',
            component: React.lazy(() => import('./past-confirmed/PastFair'))
        },
        {
            path: '/university/fairs/future-confirmed',
            component: React.lazy(() => import('./future-confirmed/FutureFair'))
        },
    ]
};

export default FairsConfigs;