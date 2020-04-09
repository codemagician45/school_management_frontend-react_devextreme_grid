import * as Actions from '../actions';

const initialState = {
    data: [],
};

const schoolsReducer = function (state = initialState, action) {

    switch (action.type) {

        case Actions.GET_SCHOOLS:
            {
                console.log("here is get schools");
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

export default schoolsReducer;