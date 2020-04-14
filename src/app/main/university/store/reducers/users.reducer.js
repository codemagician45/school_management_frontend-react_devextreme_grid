import * as Actions from '../actions';

const initialState = {
    data: null
};

const userReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_USERS:
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

export default userReducer;