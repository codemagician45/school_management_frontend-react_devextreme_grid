import React from 'react';

const FairsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/fairs/fairs',
            component: React.lazy(() => import('./Fairs'))
        }
    ]
};

export default FairsConfig;