import axios from 'axios';

export const GET_USERS = '[UNIVERSITY] GET_USERS';
export const ADD_USER = '[UNIVERSITY] ADD_USER';
export const UPDATE_USER = '[UNIVERSITY] UPDATE_USER';
export const GET_UNIVERSITIES = '[university] GET_UNIVERSITIES';

export function getUsers() {

    const request = axios.get(`${process.env.REACT_APP_API_URL}/users`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_USERS,
                payload: response.data
            })
        );
}

export function addUser(data) {

    const request = axios.post(`${process.env.REACT_APP_API_URL}/users/add`, data);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: ADD_USER,
                payload: response.data
            })
        );
}

export function updateUser(data) {

    console.log("updateuser action", data)
    const request = axios.put(`${process.env.REACT_APP_API_URL}/users/update`, data);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        );
}

export function getUserProfile(id) {

    const request = axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        );
}

export function getUniversities() {
    const request = axios.get(`${process.env.REACT_APP_API_URL}/universities`);
    return (dispatch) =>
        request.then((response) => {
            console.log(response)
            dispatch({
                type: GET_UNIVERSITIES,
                payload: response.data
            })

        }
        );
}
