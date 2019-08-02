import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'
import newsReducer from '@reducers/NewsReducer'
import localesReducer from '@reducers/intlReducer'

export default combineReducers({
    news: newsReducer,
    intl: intlReducer,
    locales: localesReducer
})