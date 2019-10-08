import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import { ThroughProvider } from 'react-through'
import App from './components/app'
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from '../serviceWorker'
import './styles/index.scss'
import './config/env.js'

import rootReducer from './rootReducer'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

import WebFont from 'webfontloader';

WebFont.load({
    classes: false,
    google: {
        families: ['Roboto:300,400,700', 'sans-serif']
    }
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThroughProvider>
                <App />
            </ThroughProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
