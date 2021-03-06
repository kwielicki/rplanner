import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    VERIFY_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
  } from "Actions/auth.js"


  export default (
    state = {
      isLoggingIn: false,
      isLoggingOut: false,
      isVerifying: false,
      loginError: false,
      logoutError: false,
      isAuthenticated: false,
      isLoading: false,
      isRegister: false,
      registerError: false,
      registerAlert: false,
      user: {},
      ownerData: {}
    },
    action
  ) => {
    switch (action.type) {
      case REGISTER_REQUEST: {
        return {
          ...state,
          isRegister: false,
          isLoading: true,
        }
      };
      case REGISTER_SUCCESS: {
        return {
          ...state,
          isRegister: true,
          isLoading: false,
          registerError: false,
          registerAlert: action.message
        }
      };
      case REGISTER_FAILURE: {
        return {
          ...state,
          isRegister: false,
          isLoading: false,
          registerError: true,
          registerAlert: action.error
        }
      };
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          isLoading: true,
          error: action.error,
          loginError: false
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isLoading: false,
          isAuthenticated: true,
          user: action.user,
          ownerData: action.ownerData
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isLoading: false,
          isAuthenticated: false,
          error: action.error,
          loginError: true
        };
      case LOGOUT_REQUEST:
        return {
          ...state,
          isLoggingOut: true,
          logoutError: false
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isLoggingOut: false,
          isAuthenticated: false,
          user: {}
        };
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingOut: false,
          logoutError: true
        };
      case VERIFY_REQUEST:
        return {
          ...state,
          isVerifying: true,
          verifyingError: false
        };
      case VERIFY_SUCCESS:
        return {
          ...state,
          isVerifying: false
        };
      case VERIFY_FAILURE:
        return {
          ...state,
          isVerifying: false
        }
      default:
        return state;
    }
  };
