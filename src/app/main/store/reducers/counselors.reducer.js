import * as Actions from '../actions'

const initialState = {
    data: null
}

const counselorReducer = (state = initialState, action) => {
    switch (action.type) {

        case Actions.GET_COUNSELORS:
            {
                return {
                    ...state,
                    data: action.payload
                }
            }
        default:
            {
                return {
                    state
                }
            }
    }
}

export default counselorReducer