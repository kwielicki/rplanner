import { combineReducers } from 'redux'
import newsReducer from 'Reducers/newsReducer'
import auth from "Reducers/auth"
import { verifyAuth } from "Actions/auth"

export default combineReducers({
    news: newsReducer,
    verifyAuth: verifyAuth,
    auth
})