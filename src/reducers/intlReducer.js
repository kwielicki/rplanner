import { intlReducer } from 'react-intl-redux'

const UPDATE_LOCALES = 'UPDATE_LOCALES'

const initialState = {}

export default function localesReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_LOCALES:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}