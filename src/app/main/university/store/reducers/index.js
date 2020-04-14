import { combineReducers } from 'redux';
import schools from './schools.reducer';
import uniprofile from './uniprofile.reducer';
import users from './users.reducer';

const reducer = combineReducers({
    schools,
    uniprofile,
    users
});

export default reducer;
