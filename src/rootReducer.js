import { combineReducers } from 'redux'
import newsReducer from 'Reducers/NewsReducer'

export default combineReducers({
    news: newsReducer
})