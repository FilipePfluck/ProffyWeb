import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-primary);
    top: 0;
    position: relative;


    padding-bottom: 2.6rem;
`

export const HeaderContent = styled.div`
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
    display: flex;
    align-items: top;
    margin-bottom: 5rem;

    div{
        display: flex;
        flex-direction: column;
    }

    a{
        color: #fff;
        transition: 0.2s;
        margin-right: 1.2rem;
        height: 3.2rem;

        &hover{
            filter: brightness(0.8);
        }

        svg{
            height: 3.2rem;
            width: 3.2rem;
        }
    }

    strong {
        font: 700 3.4rem Archivo;
        line-height: 4.2rem;
        color: var(--color-title-in-primary);
    }

    p{
        max-width: 30rem;
        font: 1.6rem Archivo;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
        margin-top: 2.4rem;
    }
`