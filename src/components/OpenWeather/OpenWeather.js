import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './OpenWeather.scss'
import { isEmpty } from 'lodash'
import Moment from 'react-moment'

import { connect } from 'react-redux'
import { fetchOpenWeather } from 'Actions/openWeatherActions'
import Loader from 'Components/UI/Loader'
import LazyImage from 'Components/LazyImage'
import Button from 'Components/Button'

import { convertUtcDate } from 'Components/Helpers/convertUtcDate'

import WeatherBackground from 'Assets/images/weather_background.jpg'
import imagePlaceHolder from 'Assets/images/placeholder_768x768.png'

const mapStateToProps = state => {
    const { weather,
            loading,
            error } = state.openWeather
    return {
        weather: weather,
        loading: loading,
        error: error
    }
}

@CSSModules(styles, {allowMultiple: true})
class OpenWeatherHeader extends Component {
    render() {
        const { data: { cityName, country } } = this.props
        return (
            <div styleName='__header'>
                <span styleName='__city'>{cityName}</span>
                <span styleName='__country'>{country}</span>
            </div>
        )
    }
}

@CSSModules(styles, {allowMultiple: true})
class OpenWeatherFooter extends Component {
    render() {
        const { data, data: { dt } } = this.props
        return (
            <div styleName='__footer'>
                <div styleName='__time'>
                    <Moment date={convertUtcDate(dt)}
                            format="HH:MM"
                            styleName='__timeDt'/>
                    <Moment date={convertUtcDate(dt)}
                            format="dddd, MMMM Do"
                            styleName='__timeDate'/>
                </div>
                <span styleName='__temp'>
                    {_.round(data.weatherTemp, 1)}
                    <sup>&deg;</sup>C
                </span>
            </div>
        )
    }
}

@CSSModules(styles, {allowMultiple: true})
class OpenWeather extends Component {

    // if (navigator.geolocation) {
    //     return navigator.geolocation.getCurrentPosition(position => {
    //         console.log(position)
    //     })
    // }

    /*@TODO
     * - uporządkować nazewnictwo funkcji,
     * - przygotować widok, dla przypadku, kiedy response wraca z errorem,
     * - napisać funkcjonalność bazującą na geolocation. Ma to działać w ten sposób,
     *   że, po zalogowaniu do aplikacji / lub po wejściu na ten węzeł, do Redux'a ma wpłynąć
     *   informacja geolokalizacji. Jeśli użytkownik aplikacji wyraził na to zgodę, następuje użycie,
     *   jego cordów, w celu pokazania informacji pogodowych z tego regionu. W przypadku przeciwnym,
     *   należy przygotować komunikat, który zostanie wyposażony w kontrolkę: input + button, oraz stosowny
     *   komunikat
     * 
     *   ** Robi się mało czytelne
     *   Trzeba by porozdzielać na komponenty
     *   np. 
     */

    componentDidMount() {

        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(position => {
                this.props.dispatch(fetchOpenWeather(position.coords.latitude, position.coords.longitude))
            });
        }

    }

    __urlToWeatherIcon = (iconCode) => {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    }

    __urlToGoogleMaps = (cords) => {
        const { lat, lon } = cords
        return `https://maps.google.com/maps?&z=15&mrt=yp&t=k&q=${lat},${lon}`
    }
    __convertMilesToKilometers = (miles) => {
        return (miles * 3.6).toFixed(1)
    }

    render() {
        const { weather, 
                loading, error } = this.props
        
        if ( loading ) return <Loader/>


        return (
            (!_.isEmpty(weather)
                ?   <div styleName='OpenWeather'>
                        <div styleName='__background'>
                            <LazyImage placeholder={imagePlaceHolder}
                                       src={WeatherBackground}
                                       isCovered
                                       styleName='__backgroundSrc'/>
                            <OpenWeatherHeader data={weather}/>
                            <OpenWeatherFooter data={weather}/>
                        </div>
                        <div styleName='__inner'>
                            <div styleName='__icon'>
                                <LazyImage placeholder={imagePlaceHolder}
                                           src={this.__urlToWeatherIcon(weather.weatherIcon)}
                                           styleName='__iconSource'/>
                            </div>
                            <span styleName='__iconDescription'>{weather.description}</span>
                            <div styleName='__content'>
                                <ul styleName='__list'>
                                    <li styleName='__element'>
                                        <span styleName='__elementLabel'>Wind speed</span>
                                        <span styleName='__elementValue'>{weather.speed} km/h</span>
                                    </li>
                                    <li styleName='__element'>
                                        <span styleName='__elementLabel'>Sunrise</span>
                                        <span styleName='__elementValue'>
                                            <Moment date={convertUtcDate(weather.sunrise)} format="HH:MM"/>
                                        </span>
                                    </li>
                                    <li styleName='__element'>
                                        <span styleName='__elementLabel'>Sunset</span>
                                        <span styleName='__elementValue'>
                                            <Moment date={convertUtcDate(weather.sunset)} format="HH:MM"/>
                                        </span>
                                    </li>
                                    <li>
                                        <Button type='external'
                                                variant='primary'
                                                fullWidth
                                                linkUrl={this.__urlToGoogleMaps(weather.coord)}>GM</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                : <p>Brak danych do wyświetlenia.</p>
            )
            
        )
    }
}

const OpenWeatherWithCssModules = CSSModules(OpenWeather, styles, {allowMultiple: true})
export default connect(mapStateToProps)(OpenWeatherWithCssModules)