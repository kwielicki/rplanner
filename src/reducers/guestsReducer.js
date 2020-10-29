import {
    FETCH_GUESTS_BEGIN,
    FETCH_GUESTS_SUCCESS,
    FETCH_GUESTS_FAILURE
} from 'Actions/guestsActions.js'
import { guestFiltersConstants } from 'Constants/guestFilters.constants'
import { filter, isEmpty, merge } from 'lodash'

const initialState = {
    collection:  [],
    filteredCollection: [],
    appliedFilters: {},
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
                collection: action.payload.collection,
                filteredCollection: action.payload.collection
            }

        case FETCH_GUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                collection: []
            }
        case guestFiltersConstants.IDENTICAL:
            return {
                ...state,
                appliedFilters: action.payload
            }

        default:
            return state
    }
}
