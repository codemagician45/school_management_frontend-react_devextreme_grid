import axios from 'axios';

export const GET_UNIPRO = '[university] GET UNIPRO';
export const UPDATE_UNIPRO = '[university] UPDATE UNIPRO';


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
    console.log("here is updating action", data)

    const request = axios.put(`${process.env.REACT_APP_API_URL}/university/update`, data);
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: UPDATE_UNIPRO,
                payload: response.data
            })
        );
}

