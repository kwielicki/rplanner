import {
    HAMBURGER_OPEN,
    HAMBURGER_CLOSE,
} from 'Actions/hamburgerActions.js'

const initialState = {
    isOpen:  false,
}

export default function hamburgerReducer(state = initialState, action) {
    switch(action.type) {
        case HAMBURGER_OPEN:
            return {
                ...state,
                isOpen: true,
            }
        case HAMBURGER_CLOSE:
            return {
                ...state,
                isOpen: false,
            }
        default:
            return state
    }
}