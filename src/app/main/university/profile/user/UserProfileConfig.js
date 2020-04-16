import React from 'react';

const UserProfileConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/university/profile/user',
            component: React.lazy(() => import('./UserProfile'))
        }
    ]
};

export default UserProfileConfig;