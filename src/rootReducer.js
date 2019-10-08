import { combineReducers } from 'redux'
import newsReducer from '@reducers/NewsReducer'

export default combineReducers({
    news: newsReducer
})