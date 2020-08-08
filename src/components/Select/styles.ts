import styled from 'styled-components'

export const Container = styled.div`
            position: relative;
            margin-top: 1.6rem;

            label {
                color: var(--color-text-in-primary);
                font-size: 1.4rem;
            }

            select{
                width: 100%;
                height: 5.6rem;
                border-radius: 0.8rem;
                background-color: var(--color-input-background);
                border: 1px solid var(--color-line-in0white);
                outline: 0;
                font: 1.6rem Archivo;
                color: #ccc;
                padding: 0 1.6rem;
                margin-top: 0.8rem;
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
`
