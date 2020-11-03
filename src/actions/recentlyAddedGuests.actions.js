import { recentlyAddedGuestsConstants } from 'Constants/recentlyAddedGuests.constants'
import { db, userUID } from "Firebase/firebase.js"

export const recentlyAddedGuestsActions = {
    recentlyAddedGuestsBegin,
    recentlyAddedGuestsSuccess,
    recentlyAddedGuestsFailure
}

function recentlyAddedGuestsBegin() {
    return { type: recentlyAddedGuestsConstants.FETCH_GUESTS_BEGIN }
}

function recentlyAddedGuestsSuccess(collection) {
    return {
        type: recentlyAddedGuestsConstants.FETCH_GUESTS_SUCCESSX,
        payload: { collection }
    }
}

function recentlyAddedGuestsFailure(error) {
    return {
        type: recentlyAddedGuestsConstants.FETCH_GUESTS_FAILUREX,
        payload: { error }
    }
}


export function fetchRecentlyAddedGuests(limit) {
    const recentlyGuests = [];
    return dispatch => {
        dispatch(recentlyAddedGuestsBegin())
        return db
                .collection('guests')
                .doc(userUID())
                .collection('guest')
                .orderBy("timestamp", "desc")
                .limit(limit)
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
                    dispatch(recentlyAddedGuestsSuccess(guests))
                })
                .catch(error => dispatch(recentlyAddedGuestsFailure(error)))
    }
}
