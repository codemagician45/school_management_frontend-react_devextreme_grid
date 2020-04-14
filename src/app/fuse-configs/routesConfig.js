import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import smsConfigs from 'app/main/sms/smsConfigs';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import elearningConfigs from 'app/main/elearning/elearningConfigs';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';

import universityConfigs from 'app/main/university/universityConfigs';
import schoolConfigs from 'app/main/school/schoolConfigs';

const routeConfigs = [
	// ...smsConfigs,
	// ...pagesConfigs,
	// ...elearningConfigs,
	...universityConfigs,
	...schoolConfigs,
	LoginConfig,
	LogoutConfig,


];

// const routeConfigs = [
// 	UniversityConfigs,
// 	LoginConfig,
// 	LogoutConfig,
// ];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'student', 'parent', 'teacher', 'librarian', 'accountant', 'employee']),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/university/schools" />
	},
	// {
	// 	path: '/',
	// 	exact: true,
	// 	component: () => <Redirect to="/university/users" />
	// },
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
