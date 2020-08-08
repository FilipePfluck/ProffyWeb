import React, { useState, useCallback, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'

import api from '../../services/api'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'

import whatsapp from '../../assets/icons/whatsapp.svg'

import * as S from './styles'

interface Teacher{
    avatar: string
    bio: string
    cost: number
    id: number
    name: string
    subject: string
    user_id?: number
    whatsapp: string
}

const TeacherList: React.FC = ()=>{
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = useCallback(async(e: FormEvent)=>{
        e.preventDefault()

        const response = await api.get('/classes', {
            params:{
                subject, 
                week_day, 
                time
            }
        })

        setTeachers(response.data)
    },[subject, week_day, time])

    const handleConnect = useCallback((teacher_id)=>{
        api.post('connections', {
            user_id: teacher_id
        })
    },[])

    return(
        <S.Container>
            <PageHeader title="Estes são os Proffys disponíveis"/>
            <S.Form onSubmit={handleSubmit}>
                    <Select 
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Educação Física', label: 'Educação Física'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'História', label: 'História'},
                            { value: 'Inglês', label: 'Inglês'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Química', label: 'História'}
                        ]}
                        label="Matéria" 
                        name="subject" 
                    />
                    <Select 
                        value={week_day}
                        onChange={e => {setWeekDay(e.target.value)}}
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda'},
                            { value: '2', label: 'Terça'},
                            { value: '3', label: 'Quarta'},
                            { value: '4', label: 'Quinta'},
                            { value: '5', label: 'Sexta'},
                            { value: '6', label: 'Sábado'},
                        ]}
                        label="Dia da semana" 
                        name="week_day" 
                    />
                <Input 
                    value={time}
                    onChange={e => {setTime(e.target.value)}}
                    label="Hora" 
                    type="time" 
                    name="hour" 
                />

                <button type="submit"><FiSearch/></button>
            </S.Form>
            <S.Main>
                {teachers.map((teacher: Teacher) => (
                    <article key={teacher.id}>
                        <header>
                            <img src={teacher.avatar} alt={teacher.name}/>
                            <div>
                                <strong>{teacher.name}</strong>
                                <span>{teacher.subject}</span>
                            </div>
                        </header>
                        <p>
                            {teacher.bio}
                        </p>
                        <footer>
                            <p>
                                Preço/hora:
                                <strong>R$ {teacher.cost}</strong>
                            </p>
                            <a target="_blank" onClick={()=>handleConnect(teacher.id)} href={`https://wa.me/${teacher.whatsapp}`}>
                                <img src={whatsapp} alt="whatsapp"/>
                                entrar em contato
                            </a>

                        </footer>
                    </article>
                ))}
            </S.Main>
        </S.Container>
    )
}

export default TeacherList