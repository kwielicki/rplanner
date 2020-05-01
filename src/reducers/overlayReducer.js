import {
    OVERLAY_SHOW,
    OVERLAY_HIDE,
} from 'Actions/overlayActions.js'

const initialState = {
    isOverlayActivated: false,
}

export default function overlayReducer(state = initialState, action) {
    switch(action.type) {
        case OVERLAY_SHOW:
            return {
                ...state,
                isOverlayActivated: true
            }
        case OVERLAY_HIDE:
            return {
                ...state,
                isOverlayActivated: false
            }
        default:
            return state
    }
}