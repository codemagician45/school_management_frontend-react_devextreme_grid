import axios from 'axios';

export const GET_USERS = '[UNIVERSITY] GET_USERS';

export function getUsers() {

    const request = axios.get('http://localhost:3000/api/schools');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_USERS,
                payload: response.data
            })
        );
}