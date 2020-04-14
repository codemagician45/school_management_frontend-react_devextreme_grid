import axios from 'axios';

export const GET_UNIPRO = '[university] GET UNIPRO';
export const UPDATE_UNIPRO = '[university] UPDATE UNIPRO';

export function getUniProfile(data) {

    // const request = axios.get(`http://localhost:3000/api/university/${uniID}`);
    const body = {
        id: data.id
    }
    // console.log("here is body", body)
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
}