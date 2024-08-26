import {createGlobalStyle} from "styled-components";
import mainPhoto from '../assets/images/main-photo.webp'

export const GlobalStyle = createGlobalStyle`
    
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    header, section:first-of-type {
        background-image: url(${mainPhoto});
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed; //почему это работает??
        color: #FFFFFF
    }
`