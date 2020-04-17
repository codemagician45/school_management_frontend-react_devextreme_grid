import _ from '@lodash';
import jwt from 'jsonwebtoken';
import mock from './mock';
import axios from 'axios';
/* eslint-disable camelcase */

const users = []; // eslint-disable-next-line
// var authDB = {
// }
// const authDB = Object.create(null);
fetch('http://localhost:3000/api/users').then(response => response.json()).then(res => res.map(row => {
	const data = {
		uuid: row.uuid,
		password: row.password,
		role: row.role,

		data: {
			displayName: row.firstName,
			photoURL: row.photoURL,
			email: row.email,
			id: row.id,
			university_id: row.university_id,
			settings: {
				layout: {
					style: 'layout1',
					config: {
						scroll: 'content',
						navbar: {
							display: true,
							folded: false,
							position: 'left'
						},
						toolbar: {
							display: true,
							style: 'fixed',
							position: 'below'
						},
						footer: {
							display: false,
							style: 'fixed',
							position: 'below'
						},
						mode: 'fullwidth'
					}
				},
				customScrollbars: true,
				theme: {
					main: 'legacy',
					navbar: 'mainThemeDark',
					toolbar: 'legacy',
					footer: 'default'
				}
			},
			shortcuts: []
		}
	};
	users.push(data);
	// authDB = {
	// 	users: users
	// }
}));
const authDB = {
	users: users
}
// console.log(authDB.users);
const jwtConfig = {
	secret: '|?af%fF<|?kiuartppasf%dfF<fF<^FDf42',
	expiresIn: 5 // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

mock.onGet('/api/auth').reply(config => {
	const data = JSON.parse(config.data);
	const { email, password } = data;

	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = {
		email: user ? null : 'Check your username/email',
		password: user && user.password === password ? null : 'Check your password'
	};

	if (!error.email && !error.password) {
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply(config => {
	const data = JSON.parse(config.data);
	const { access_token } = data;

	try {
		const { id } = jwt.verify(access_token, jwtConfig.secret);
		const { users } = authDB;
		console.log("aaa", id)
		console.log("bbb", users.length)
		// const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
		const user = authDB.users.find(_user => _user.uuid == id);
		console.log("ccc", user)
		delete user.password;

		const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });


		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	} catch (e) {
		const error = 'Invalid access token detected';
		return [401, { error }];
	}
});

mock.onPost('/api/auth/user/update').reply(config => {
	const data = JSON.parse(config.data);
	const { user } = data;

	authDB.users = authDB.users.map(_user => {
		if (user.uuid === user.id) {
			return _.merge(_user, user);
		}
		return _user;
	});

	return [200, user];
});
