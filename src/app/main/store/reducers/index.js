import { combineReducers } from 'redux';
import schools from './schools.reducer';
import users from './users.reducer';
import fairs from './fairs.reducer';
import universities from './universities.reducer';
import counselors from './counselors.reducer';

const reducer = combineReducers({
    schools,
    users,
    fairs,
    universities,
    counselors
});

export default reducer;
