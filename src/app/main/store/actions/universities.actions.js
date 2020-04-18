import axios from 'axios';

export const GET_UNIPRO = '[university] GET UNIPRO';
export const UPDATE_UNIPRO = '[university] UPDATE UNIPRO';

export const GET_UNIVERSITIES = '[school] GET_UNIVERSITIES';


export function getUniProfile(data) {

    // const request = axios.get(`http://localhost:3000/api/university/${uniID}`);
    const body = {
        id: data.id
    }
    const request = axios.post(`http://localhost:3000/api/university`, body);
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: GET_UNIPRO,
                payload: response.data
            })
        );
}

export function updateUniProfile(data) {

    const request = axios.put(`${process.env.REACT_APP_API_URL}/university/update`, data);
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: UPDATE_UNIPRO,
                payload: response.data
            })
        );
}

export function getUniversities() {

    const request = axios.get(`${process.env.REACT_APP_API_URL}/universities`);

    return (dispatch) => {
        request.then((response) => {
            dispatch({
                type: GET_UNIVERSITIES,
                payload: response.data
            })
        })
    }
}

