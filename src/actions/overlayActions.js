export const OVERLAY_SHOW = 'OVERLAY_SHOW'
export const OVERLAY_HIDE = 'OVERLAY_HIDE'

export const overlayShow = ( overlayShow ) => ({
    type: OVERLAY_SHOW,
    payload: { overlayShow }
})

export const overlayHide = ( overlayHide ) => ({
    type: OVERLAY_HIDE,
    payload: { overlayHide }
})

export function overlayShowAction( show ) {
    return dispatch => {
        dispatch(overlayShow(show))
    }
}
export function overlayHideAction( hide ) {
    return dispatch => {
        dispatch(overlayHide(hide))
    }
}