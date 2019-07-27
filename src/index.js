import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from '../serviceWorker'
import './styles/index.scss'
import './config/env.js'

import WebFont from 'webfontloader';

import { IntlProvider } from "react-intl"
import { addLocaleData } from "react-intl"
import locale_en from 'react-intl/locale-data/en'
import locale_pl from 'react-intl/locale-data/pl'
addLocaleData([...locale_en, ...locale_pl])
import messages_pl from "./translations/pl.json"
import messages_en from "./translations/en.json"


const messages = {
    'pl': messages_pl,
    'en': messages_en
}
const language = navigator.language.split(/[-_]/)[0]; 
console.log(messages)

WebFont.load({
    classes: false,
    google: {
        families: ['Roboto:300,400,700', 'sans-serif']
    }
})

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
