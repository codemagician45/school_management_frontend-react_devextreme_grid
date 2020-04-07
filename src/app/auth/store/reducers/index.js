import { combineReducers } from 'redux';
import login from './login.reducer';
import user from './user.reducer';

const authReducers = combineReducers({
	user,
	login
});

export default authReducers;
