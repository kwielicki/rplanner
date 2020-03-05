import {
    FETCH_GUESTS_BEGIN,
    FETCH_GUESTS_SUCCESS,
    FETCH_GUESTS_FAILURE
} from 'Actions/guestsActions.js'

const initialState = {
    collection:  [],
    loading: false,
    error: null,
}

export default function guestsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_GUESTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_GUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                collection: action.payload.collection
            }

        case FETCH_GUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                collection: []
            }

        default:
            return state
    }
}