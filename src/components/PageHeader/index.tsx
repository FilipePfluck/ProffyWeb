import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import * as S from './styles'

interface PageHeaderProps{
    title: string
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description}) => {
    return(
        <S.Header>
            <S.HeaderContent>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
                <div>
                    <strong>{title}</strong>
                    {description && <p>{description}</p>}
                </div>
            </S.HeaderContent>
        </S.Header>
    )
}

export default PageHeader