import React from 'react';

const UsersConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/users',
            component: React.lazy(() => import('./Users'))
        }
    ]
};

export default UsersConfig;