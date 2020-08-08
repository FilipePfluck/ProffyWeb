import React, {useState, useEffect} from 'react'

import api from '../../services/api'

import logo from '../../assets/logo.svg'
import landing from '../../assets/landing.svg'

import giveClasses from '../../assets/icons/give-classes.svg'
import study from '../../assets/icons/study.svg'
import heart from '../../assets/icons/purple-heart.svg'

import * as S from './styles'

const Landing: React.FC = () => {
    const [connections, setConnections] = useState(0)

    useEffect(()=>{
        api.get('/connections').then(response => {
            setConnections(response.data)
        })
    },[])

    return(
        <S.Container>
            <S.Content  className="container">
                <S.LogoAndLanding>
                    <S.LogoContainer>
                        <img src={logo} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online</h2>
                    </S.LogoContainer>

                    <S.LandingImage
                        src={landing} 
                        alt="Plataforma de estudos"
                    />
                </S.LogoAndLanding>

                <S.ButtonsContainer>
                    <S.Study to="/study">
                        <img src={study} alt="Estudar"/>
                        Estudar
                    </S.Study>
                    <S.Teach to="/teach">
                        <img src={giveClasses} alt="Estudar"/>
                        Ensinar
                    </S.Teach>
                </S.ButtonsContainer>

                <span>
                    Total de {connections} conexões já realizadas
                    <img src={heart} alt="Com amor"/>
                </span>
            </S.Content>
        </S.Container>
    )
}

export default Landing