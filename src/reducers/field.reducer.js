import {
    ALL_FIELDS
} from '../constants/actionTypes'
import inialState from './initalState'
/* --------------------------------------------- */
const fieldReducer = (state = inialState, action) => {
    switch (action.type) {
        case ALL_FIELDS:
            return {
                ...state,
                allFields: action.value
            }
        default: return state
    }
}
/* --------------------------------------------- */
export default fieldReducer
/* --------------------------------------------- */