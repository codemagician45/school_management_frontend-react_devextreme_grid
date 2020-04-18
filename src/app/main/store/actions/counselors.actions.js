import axios from 'axios'

export const GET_COUNSELORS = '[school] GET_COUNSELORS';
export const CREATE_COUNSELOR = '[school] CREATE_COUNSELOR';
export const UPDATE_COUNSELOR = '[school] UPDATE_COUNSELOR';


export function getCounselors(schId) {
    const request = axios.get(`${process.env.REACT_APP_API_URL}/counselors/${schId}`)

    return (dispatch) => {
        request.then(
            response =>
                dispatch({
                    type: GET_COUNSELORS,
                    payload: response.data
                })
        )
    }


}

export function createCounselor(data) {
    const request = axios.post(`${process.env.REACT_APP_API_URL}/counselors/create`, data);

    return (dispatch) => {
        request.then((res) => {
            dispatch({
                type: CREATE_COUNSELOR,
                payload: res.data
            })
        })
    }
}

export function editCounselor(data) {
    const request = axios.put(`${process.env.REACT_APP_API_URL}/counselors/update`, data);
    return (dispatch) => {
        request.then(
            (res) =>
                dispatch({
                    type: UPDATE_COUNSELOR,
                    payload: res.data
                })
        )
    }
}