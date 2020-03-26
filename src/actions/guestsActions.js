import { db } from "Firebase/firebase.js"

export const FETCH_GUESTS_BEGIN   = 'FETCH_GUESTS_BEGIN'
export const FETCH_GUESTS_SUCCESS = 'FETCH_GUESTS_SUCCESS'
export const FETCH_GUESTS_FAILURE = 'FETCH_GUESTS_FAILURE'

export const fetchGuestsBegin = () => ({
    type: FETCH_GUESTS_BEGIN
})

export const fetchGuestsSuccess = collection => ({
    type: FETCH_GUESTS_SUCCESS,
    payload: { collection }
})

export const fetchGuestsFailure = error => ({
    type: FETCH_GUESTS_FAILURE,
    payload: { error }
})


export function fetchGuests() {
    return dispatch => {
        dispatch(fetchGuestsBegin())
        return db
                .collection('guests')
                .orderBy("timestamp", "desc")
                .get()
                .then(doc => {
                    const guests = []
                    doc.docs.map(doc => {
                        guests.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    })
                    return guests
                })
                .then(guests => {
                    dispatch(fetchGuestsSuccess(guests))
                })
                .catch(error => dispatch(fetchGuestsFailure(error)))
    }
}