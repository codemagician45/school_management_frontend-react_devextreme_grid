import * as Actions from '../actions';

const initialState = {
    data: null,

};

const universityReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_UNIPRO:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        case Actions.GET_UNIVERSITIES:
            {
                return {
                    ...state,
                    data: action.payload
                }
            }
        default:
            {
                return state;
            }
    }
};

export default universityReducer;