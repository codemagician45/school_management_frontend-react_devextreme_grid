import axios from 'axios';

export const GET_FAIRS_SCH = '[SCHOOL] GET_FAIRS_SCH';
export const GET_CURRICULUMS = '[SCHOOL] GET_CURRICULUMS';
export const GET_SCHOOLS = '[SCHOOL] GET_SCHOOLS';

export function getFairsSch() {
    const request = axios.get(`${process.env.REACT_APP_API_URL}/fairs`);

    return (dispatch) => {
        request.then((res) => {
            dispatch({
                type: GET_FAIRS_SCH,
                payload: res.data
            })
        })
    }
}

export function getCurriculums() {
    const request = axios.get(`${process.env.REACT_APP_API_URL}/fairs/curriculums`);

    return (dispatch) => {
        request.then((res) => {
            dispatch({
                type: GET_CURRICULUMS,
                payload: res.data
            })
        })
    }
}

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