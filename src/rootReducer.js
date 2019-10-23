import { combineReducers } from 'redux'
import newsReducer from 'PATH_TO__REDUCERS/NewsReducer'

export default combineReducers({
    news: newsReducer
})