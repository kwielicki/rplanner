import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux'
import App from './components/app'
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from '../serviceWorker'
import './styles/index.scss'
import './config/env.js'

import store, { DevTools } from './store'

import { addLocaleData } from "react-intl"
import locale_en from 'react-intl/locale-data/en'
import locale_pl from 'react-intl/locale-data/pl'
addLocaleData([...locale_en, ...locale_pl])


import WebFont from 'webfontloader';

WebFont.load({
    classes: false,
    google: {
        families: ['Roboto:300,400,700', 'sans-serif']
    }
})

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
