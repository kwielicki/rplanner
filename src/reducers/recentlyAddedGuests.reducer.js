import { recentlyAddedGuestsConstants, recentlyAddedGuestsTypes } from 'Constants/recentlyAddedGuests.constants'

const initialState = {
    collection:  [],
    loading: false,
    error: null,
}

export default function recentlyAddedGuestsReducer(state = initialState, action) {
    switch(action.type) {
        case recentlyAddedGuestsConstants.FETCH_GUESTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
                type: recentlyAddedGuestsTypes.FETCH_GUESTS_BEGIN
            }

        case recentlyAddedGuestsConstants.FETCH_GUESTS_SUCCESSX:
            return {
                ...state,
                loading: false,
                collection: action.payload.collection,
                type: recentlyAddedGuestsTypes.FETCH_GUESTS_SUCCESS
            }

        case recentlyAddedGuestsConstants.FETCH_GUESTS_FAILUREX:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                collection: [],
                type: recentlyAddedGuestsTypes.FETCH_GUESTS_FAILURE
            }

        default:
            return state
    }
}
