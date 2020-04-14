import React from 'react';

const CounselorConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/schools/counselor_list',
            component: React.lazy(() => import('./Counselor'))
        }
    ]
};

export default CounselorConfig;