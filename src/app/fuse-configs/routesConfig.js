import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import smsConfigs from 'app/main/sms/smsConfigs';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import elearningConfigs from 'app/main/elearning/elearningConfigs';
import LoginConfig from 'app/main/login/LoginConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';

const routeConfigs = [
	...smsConfigs,
	...pagesConfigs,
	...elearningConfigs,
	LoginConfig,
	LogoutConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'student', 'parent', 'teacher', 'librarian' , 'accountant', 'employee']),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/sms/dashboard" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
