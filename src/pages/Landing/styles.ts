import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary-dark)
`

export const Content = styled.div`

    padding: 1rem 0;

    span{
        font-size: 1.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            margin-left: 0.8rem;
        }
    }

    @media(min-width: 1000px){
        max-width: 1000px;
    }
`

export const LogoAndLanding = styled.div`
    @media(min-width: 1000px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    img{
        height: 10rem;
    }

    h2{
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }

    @media(min-width: 1000px){
        margin-bottom: 0;
        margin-right: 1.5rem;
    }
`

export const LandingImage = styled.img`
    width: 100%;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    
    margin: 3.2rem 0;

    >a{
        margin-right: 1.6rem;
    }

    a{
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        
        font: 700 2.0rem Archivo;
        color: var(--color-button-text);
        transition: 0.2s;

        img{
            width: 4rem;
        }

        &:hover{
            filter: brightness(0.92);
        }
    }
`

export const Study = styled(Link)`
    background-color: var(--color-primary-lighter);
`

export const Teach = styled(Link)`
    background-color: var(--color-secundary);
`