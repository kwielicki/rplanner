import { myFirebase, db } from "Firebase/firebase.js"
import firebase from 'firebase/app';
import { alertActions } from './alert.actions'

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const VERIFY_REQUEST = "VERIFY_REQUEST"
export const VERIFY_SUCCESS = "VERIFY_SUCCESS"
export const VERIFY_FAILURE = "VERIFY_FAILURE"

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  }
} 
const receiveLogin = (user, ownerData) => {
  return {
    type: LOGIN_SUCCESS,
    user,
    ownerData
  }
}
const loginError = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}
  
const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  }
}

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
}
const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  }
}
const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error: error
  }
}
  
const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  }
}
const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  }
}
const verifyFailure = () => {
  return {
    type: VERIFY_FAILURE
  }
}
  
export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin())
  myFirebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
    .then(data => {
      if ( data?.user.emailVerified ) {
        dispatch(receiveLogin(data))
      } else {
        dispatch(alertActions.warning('Email not verified yet. Check your email.'))
      }
    })
    .catch(error => {
      const { message } = error
      dispatch(loginError(message))
      dispatch(alertActions.warning(message));
    })
}
export const logoutUser = () => dispatch => {
  dispatch(requestLogout())
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout())
      dispatch(alertActions.success('You have been correctly logged out of the application.'))
    })
    .catch(error => {
      dispatch(logoutError())
      dispatch(alertActions.error(error))
    })
}

export const registerUser = (credentials) => dispatch => {
  dispatch(registerRequest())
  const { firstName, lastName, email, password } = credentials
  myFirebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			myFirebase.auth().onAuthStateChanged(function(user) {
        user.sendEmailVerification().then(() => {
          dispatch(alertActions.success(`Verifaction email was sending for ${user.email}. Check your email`))
          db.collection('users').doc(user.uid)
            .set({
              firstName: firstName,
              lastName: lastName,
              fullName: `${firstName} ${lastName}`,
              updated: false,
              email: email,
              creationDate: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            dispatch(registerSuccess())
          })
        }).catch((error) => {
          const { message } = error
          dispatch(registerFailure(message))
          dispatch(alertActions.error(message))
        })
			});
		})
		.catch((error) => {
			const { message } = error
      dispatch(registerFailure(message))
      dispatch(alertActions.error(message))
		})
}
  
export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest())
  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null && user.emailVerified) {
        db.collection('users').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            let data = doc.data();
            dispatch(receiveLogin(user, {
              email: data.email,
              fullName: data.fullName,
              firstName: data.firstName,
              lastName: data.lastName
            }))
            dispatch(verifySuccess())
          }
        })
      } else {
        dispatch(verifyFailure())
      }
    })
}

  export * from "./auth"
