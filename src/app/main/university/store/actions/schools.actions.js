import axios from 'axios';

export const GET_SCHOOLS = '[UNIVERSITY] GET_SCHOOLS';

export function getSchools() {

    // const request = axios.get('http://localhost:3000/api/schools');
    const request = axios.get(`${process.env.REACT_APP_API_URL}/schools`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_SCHOOLS,
                payload: response.data
            })
        );
}