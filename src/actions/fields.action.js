import axios from 'axios'
/* --------------------------------------------- */
import { ALL_FIELDS, STD_FIELDS, EXTRA_FIELDS, RECYLE_FIELDS } from '../constants/actionTypes'
/* --------------------------------------------- */
const apiDataSettings = (data) => {
    return {
        type: ALL_FIELDS,
        value: data
    }
}
export const setStandardFieds = (data) => {
    return {
        type: STD_FIELDS,
        value: data
    }
}
export const setRecyleFieds = (data) => {
    return {
        type: EXTRA_FIELDS,
        value: data
    }
}
export const setExtra = (data) => {
    return {
        type: RECYLE_FIELDS,
        value: data
    }
}
/* --------------------------------------------- */
export const apiCall = (index) => {
    return dispatch  => {
        axios.get(`http://54.193.89.54:8230/readFields`)
        .then( response => {
            const apiData = response.data;
            dispatch(apiDataSettings(apiData))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

/* --------------------------------------------- */