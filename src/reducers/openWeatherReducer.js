import {
    FETCH_OPEN_WEATHER_BEGIN,
    FETCH_OPEN_WEATHER_SUCCESS,
    FETCH_OPEN_WEATHER_FAILURE
} from 'Actions/openWeatherActions.js'


const initialState = {
    weather:  [],
    loading: false,
    error: null,
}

export default function openWeatherReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_OPEN_WEATHER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_OPEN_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                weather: action.payload.weather
            }

        case FETCH_OPEN_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                weather: []
            }

        default:
            return state
    }
}