import { createGlobalStyle, } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        width: 100%;
        font-size: 62.5%;
        overflow-x: hidden;
    }
    body {
        margin: 0;
        font-family: sans-serif;
        overflow-x: hidden;
        height: 100vh;
    p, button, a { font-size: 1.9rem; }
    a {
        text-decoration: none;
    }
`
// @media (min-width: 1439px) {
//         font-size: 7rem;
//     }
//     @media (min-width: 1999px) {
//         font-size: 8.5rem;
//     }
//     @media (min-width: 2300px) {
//         font-size: 10rem;
//     }