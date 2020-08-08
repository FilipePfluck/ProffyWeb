import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 0;

    @media(min-width: 700px){
        max-width: 100%;
    }
`

export const Form = styled.form`
    margin-top: -6.2rem;
    width: 90%;

    div{
        position: relative;

        label {
            color: var(--color-text-in-primary);
            font-size: 1.4rem;
        }

        input{
            width: 100%;
            height: 5.6rem;
            margin-top: 0.8rem;
            border-radius: 0.8rem;
            background-color: var(--color-input-background);
            border: 1px solid var(--color-line-in0white);
            outline: 0;
            padding: 0 1.6rem;
            font: 1.6rem Archivo;
            color: #ccc;
        }

        &::after{   
            height: 2px;
            content: '';
            background-color: var(--color-primary-input-background);
            position: absolute;
            left: 1.6rem;
            right: 1.6rem;
            bottom: 0;
            transition: 0.2s;
        }

        &:focus-within::after{
            background-color: var(--color-primary-light);
            width: calc(100%-3.2rem);
        }
    }

    div + div {
        margin-top: 1.4rem;
    }

    button{
        z-index: 3;
        width: 100%;
        height: 5.6rem;
        border-radius: 0.8rem;
        background-color: var(--color-secundary);
        border: 1px solid var(--color-line-in0white);
        outline: 0;
        font: 1.6rem Archivo;
        color: #ccc;
        transition: 0.2s;
        cursor: pointer;
        margin-top: 4.6rem;
        padding: 0;

        &:hover{
            filter: brightness(0.8)
        }

    }

    @media(min-width: 700px){
        display: grid;
        grid-template-columns: 3fr 3fr 3fr 1fr;
        column-gap: 16px;
        max-width: 740px;
        
        div{
            margin-top: 1.4rem;
        }
    }

`

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    article{
        background: var(--color-box-base);
        border: 1px solid var(--color-line-in-white);
        border-radius: 0.8rem;
        margin-top: 2.4rem;
        overflow: hidden;

        header{
            padding: 3.2rem 2rem;
            display:flex;
            align-items: center;

            img{
                width: 8rem;
                height: 8rem;
                border-radius: 4rem;
            }

            div{
                margin-left: 2.4rem;

                strong{
                    font: 700 2.4rem Archivo;
                    display: block;
                    color: var(--color-primary-lighter);
                    margin-bottom: 0.2rem;
                }

                span{
                    color: var(--color-text-complement);
                }
            }
        }

        >p{
            padding: 0 2rem;
            font-size: 1.6rem;
            line-height: 2.7rem;
            color: var(--color-text-complement)
        }

        footer{
            padding: 3.2rem 2rem;
            background: var(--color-box-footer);
            border-top: 1px solid var(--color-line-in-white);
            margin-top: 3.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                color: var(--color-text-complement);
                
                strong{
                    color: var(--color-primary);
                    font-size: 1.6rem;
                    display: block;
                }
            }

            a{
                width: 20rem;
                height: 5.6rem;
                background: var(--color-secundary);
                color: var(--color-button-text);
                border: 0;
                border-radius: 0.8rem;
                cursor: pointer;
                font: 700 1.4rem Archivo;
                transition: 0.2s;
                
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                &:hover{
                    filter: brightness(0.8);
                }

            }
        }

        @media(min-width: 700px){
            padding: 3.2rem;
        }

    }

    @media(min-width: 700px){
        max-width: 740px;
    }
`