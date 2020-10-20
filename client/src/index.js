import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, } from 'styled-components'
import App from './App'
import { GlobalStyle, } from './themes/globalStyle'
import { Theme, } from './themes/Theme'
import './themes/fonts.css'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
