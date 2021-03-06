import { combineReducers } from 'redux'
import newsReducer from 'Reducers/newsReducer'
import guestsReducer from 'Reducers/guestsReducer'
import openWeatherReducer from 'Reducers/openWeatherReducer'
import auth from "Reducers/auth"
import { verifyAuth } from "Actions/auth"
import hamburgerReducer from 'Reducers/hamburgerReducer'
import overlayReducer from 'Reducers/overlayReducer'
import alert from 'Reducers/alert.reducer'
import recentlyAddedGuestsReducer from 'Reducers/recentlyAddedGuests.reducer'

export default combineReducers({
    news: newsReducer,
    guests: guestsReducer,
    openWeather: openWeatherReducer,
    verifyAuth: verifyAuth,
    hamburger: hamburgerReducer,
    overlay: overlayReducer,
    alert: alert,
    recentlyAddedGuestsReducer: recentlyAddedGuestsReducer,
    auth
})
