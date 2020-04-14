import * as Actions from '../actions';

const initialState = {
    data: null
};

const uniProReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_UNIPRO:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        default:
            {
                return state;
            }
    }
};

export default uniProReducer;