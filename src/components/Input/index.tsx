import React, {InputHTMLAttributes} from 'react'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
    return( 
        <S.Container>
            <label htmlFor={name}>{label}</label>
            <input 
                type="text" 
                id={name}
                {...rest}
            />
        </S.Container>
    )
}

export default Input