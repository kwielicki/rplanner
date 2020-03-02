import axios from 'axios'

export const FETCH_OPEN_WEATHER_BEGIN   = 'FETCH_OPEN_WEATHER_BEGIN'
export const FETCH_OPEN_WEATHER_SUCCESS = 'FETCH_OPEN_WEATHER_SUCCESS'
export const FETCH_OPEN_WEATHER_FAILURE = 'FETCH_OPEN_WEATHER_FAILURE'

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_ID

export const fetchOpenWeatherBegin = () => ({
    type: FETCH_OPEN_WEATHER_BEGIN
})

export const fetchOpenWeatherSuccess = weather => ({
    type: FETCH_OPEN_WEATHER_SUCCESS,
    payload: { weather }
})

export const fetchOpenWeatherFailure = error => ({
    type: FETCH_OPEN_WEATHER_FAILURE,
    payload: { error }
})


export function fetchOpenWeather(lat, lon) {
    return dispatch => {
        dispatch(fetchOpenWeatherBegin());
        return axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: lat,
                    lon: lon,
                    units: 'metric',
                    appid: OPEN_WEATHER_API_KEY
                }
            })
            .then(response => {
                if (response.status === 200) return response.data;
            })
            .then(data => {
                const {
                    name,
                    dt,
                    weather: [{ description, icon }],
                    main: { humidity, pressure, temp },
                    sys: { country, sunrise, sunset},
                    coord,
                    wind: { speed }
                } = data
                return {
                    cityName: name,
                    description: description,
                    weatherIcon: icon,
                    weatherTemp: temp,
                    coord: coord,
                    country: country,
                    sunrise: sunrise,
                    sunset: sunset,
                    pressure: pressure,
                    speed: speed,
                    dt: dt,
                }
            })
            .then(weatherInformation => {
                dispatch(fetchOpenWeatherSuccess(weatherInformation))
            })
            .catch(error => dispatch(fetchOpenWeatherFailure(error)))
    }
}
