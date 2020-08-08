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

export const Main = styled.form`
    margin-top: -6.2rem;
    padding: 2.4rem;
    width: 90%;

    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    overflow: hidden;

    position: relative;

    fieldset{
        border: 0;
        color: var(--color-text-in-primary);

        legend{
            font: 700 2.4rem Archivo;
            color: var(--color-title-in-primary);
            display:flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            button{
                background: none;
                border: none;
                cursor: pointer;
                color: var(--color-primary);
                font: 700 1.6rem Archivo;
                transition: 0.2s;

                &:hover{
                    filter: brightness(0.8); 
                }
            }
        }

        div{
            position: relative;
            margin-top: 1.6rem;

            label {
                color: var(--color-text-in-primary);
                font-size: 1.4rem;
            }

            input{
                width: 100%;
                height: 5.6rem;
                border-radius: 0.8rem;
                background-color: var(--color-input-background);
                border: 1px solid var(--color-line-in0white);
                outline: 0;
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
    }

    fieldset+fieldset{
        margin-top: 6.4rem;
    }

    footer{
        padding: 4rem 2.4rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;

        p{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: var(--color-text-complement);
            
            img{
                margin-right: 2rem;
            }

        } 

        button{
            width: 100%;
            height: 5.6rem;
            background: var(--color-secundary);
            color: var(--color-button-text);
            margin-top: 1.6rem;
            cursor: pointer;
            transition: 0.2s;
            font: 700 1.6rem Archivo;

            border: 0;
            border-radius: 0.8rem;

            &:hover{
                filter: brightness(0.8);
            }
        }

        @media(min-width: 700px){
            padding: 2.0rem 4.0rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            button{
                width: 32rem;
            }
        }
    }
`


export const ScheduleItem = styled.div`
    @media(min-width: 700px){
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;
    }
`