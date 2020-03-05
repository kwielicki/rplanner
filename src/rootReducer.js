import { combineReducers } from 'redux'
import newsReducer from 'Reducers/newsReducer'
import guestsReducer from 'Reducers/guestsReducer'
import openWeatherReducer from 'Reducers/openWeatherReducer'
import auth from "Reducers/auth"
import { verifyAuth } from "Actions/auth"

export default combineReducers({
    news: newsReducer,
    guests: guestsReducer,
    openWeather: openWeatherReducer,
    verifyAuth: verifyAuth,
    auth
})