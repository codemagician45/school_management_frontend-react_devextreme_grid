import * as Actions from '../actions';

const initialState = {
    data: null,
    universities: []
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

        case Actions.UPDATE_USER:
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
                    universities: action.payload
                }
                // console.log("state", state)
            }
        default:
            {
                return state;
            }
    }
};

export default userReducer;