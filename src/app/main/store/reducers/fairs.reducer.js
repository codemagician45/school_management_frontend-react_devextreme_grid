import * as Actions from '../actions';

const initialState = {
    data: [],
    curriculums: [],
    schools: []
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
        // case Actions.CREATE_FAIR:
        //     {
        //         return {
        //             ...state,
        //             data: action.payload
        //         }
        //     }
        // case Actions.EDIT_FAIR:
        //     {
        //         return {
        //             ...state,
        //             data: action.payload
        //         }
        //     }
        case Actions.GET_CURRICULUMS:
            {
                return {
                    ...state,
                    curriculums: action.payload
                }
            }
        case Actions.GET_SCHOOLS:
            {
                return {
                    ...state,
                    schools: action.payload
                }
            }
        default:
            {
                return state;
            }
    }
}

export default fairsReducer;