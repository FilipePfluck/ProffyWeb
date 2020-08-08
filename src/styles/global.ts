import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    :root {
        
        --color-background: #221f26;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        --color-primary: #8257E5;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        --color-secundary: #04D361;
        --color-secundary-dark: #04BF58;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #32264D;
        --color-text-complement: #9C98A6;
        --color-text-base: #6A6180;
        --color-line-in-white: #25232b;
        --color-input-background: #25232b;
        --color-button-text: #FFFFFF;
        --color-box-base: #2c2933;
        --color-box-footer: #2c2933;
    
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100vh;
    }

    body {
        background: var(--color-background)
    }

    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body, input, textarea, button {
        font: 500 1.6rem Poppins
    }

    a{
        text-decoration: none;
    }

    .container{
        width: 90vw; 
        max-width: 700px;
    }

    @media(min-width: 700px){
        :root{
            font-size: 62.5%;
        }
    }
`