import * as Actions from '../actions';

const initialState = {
    data: []
}

const fairsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_FAIRS_SCH:
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
}

export default fairsReducer;