export const HAMBURGER_OPEN = 'HAMBURGER_OPEN'
export const HAMBURGER_CLOSE = 'HAMBURGER_CLOSE'

export const hamburgerOpen = ( open ) => ({
    type: HAMBURGER_OPEN,
    payload: { open }
})

export const hamburgerClose = ( close ) => ({
    type: HAMBURGER_CLOSE,
    payload: { close }
})

export function hamburgerOpenAction( open ) {
    return dispatch => {
        dispatch(hamburgerOpen(open))
    }
}

export function hamburgerCloseAction( close ) {
    return dispatch => {
        dispatch(hamburgerClose(close))
    }
}