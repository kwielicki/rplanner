import { db, userUID } from "Firebase/firebase.js"

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
    const guests = [];
    return dispatch => {
        dispatch(fetchGuestsBegin())
        return db
                .collection('guests')
                .doc(userUID())
                .collection('guest')
                .orderBy("timestamp", "desc")
                .onSnapshot({
                    includeMetadataChanges: true
                },
                (snapshot) => {
                    snapshot.docChanges().forEach(function(change) {
                        if (change.type === "added") {
                            guests.push({
                                id: change.doc.id,
                                data: change.doc.data()
                            });
                        }
                        if (change.type === "removed") {
                            guests.splice(guests.findIndex(function(idx){
                                return idx.id === change.doc.id;
                            }), 1);
                        }
                    });
                    dispatch(fetchGuestsSuccess(guests));
                });
    }
}
