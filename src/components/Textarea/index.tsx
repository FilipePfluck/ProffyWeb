import React, {TextareaHTMLAttributes} from 'react'

import * as S from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    name: string
}

const TextArea:React.FC<TextAreaProps> = ({label, name, ...rest}) => {
    return( 
        <S.Container>
            <label htmlFor={name}>{label}</label>
            <textarea 
                id={name}
                {...rest}
            />
        </S.Container>
    )
}

export default TextArea