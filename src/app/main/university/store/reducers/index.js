import { combineReducers } from 'redux';
import schools from './schools.reducer';

const reducer = combineReducers({
    schools
});

export default reducer;
