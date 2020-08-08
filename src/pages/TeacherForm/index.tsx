import React, { useCallback, useState, FormEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/icons/warning.svg'

import * as S from './styles'
import api from '../../services/api'

interface ScheduleItemSelectProps{
    index: number,
    field: string,
    value: string
}

const TeacherForm: React.FC = () => {
    const history = useHistory()

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: '0', from: '', to: ''}
    ])

    const [name, setName] = useState('')
    const [avatar, setAvatar]  = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')
    
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const handleAddNEwScheduleItem = useCallback(()=>{
        setScheduleItems([
            ...scheduleItems,
            {week_day: '0', from: '', to: ''}
        ])
    },[scheduleItems])

    const handleCreateClass = useCallback((e: FormEvent)=>{
        e.preventDefault()

        console.log({
            name,
            avatar,
            whatsapp,
            subject,
            bio,
            cost,
            scheduleItems
        })

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            subject,
            bio,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('Cadastro realizado com sucesso')

            history.push('/')
        }).catch(()=>{
            alert('Erro ao fazer cadastro')
        })
    },[name, avatar, whatsapp, subject, bio, cost, scheduleItems])

    const handleChangeScheduleItemValue = useCallback(
        ({index, field, value}: ScheduleItemSelectProps) => {
            const updatedScheduleItems = scheduleItems.map((scheduleItem, scheduleIndex)=>{
                if(scheduleIndex === index){
                    return { ...scheduleItem, [field]: value }
                }

                return scheduleItem
            })

            console.log('updatedScheduleItems:', updatedScheduleItems)

            setScheduleItems(updatedScheduleItems) 
        }
    ,[scheduleItems])

    useEffect(()=>{
        console.log('scheduleItems', scheduleItems)
    },[scheduleItems])

    return(
        <S.Container>
            <Header
                title="Que incrível que você quer dar aulas"
                description="o primeiro passo é preencher esse formulário"
            />
            
            <S.Main onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        label="Nome completo" 
                        placeholder="Insira seu nome completo" 
                        name="name" 
                        value={name}
                        onChange={(e)=>{ setName(e.target.value)}}    
                    />
                    <Input 
                        label="Avatar" 
                        placeholder="Insira a URL da imagem" 
                        name="avatar" 
                        value={avatar}
                        onChange={(e)=>{ setAvatar(e.target.value)}}    
                    />
                    <Input 
                        label="Whatsapp" 
                        placeholder="Insira seu número de telefone" 
                        name="whatsapp"
                        value={whatsapp}
                        onChange={(e)=>{ setWhatsapp(e.target.value)}}    
                    />
                    <TextArea 
                        name="bio" 
                        label="Biografia" 
                        value={bio}
                        onChange={(e)=>{ setBio(e.target.value)}}   
                    />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
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
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        label="Matéria" 
                        name="subject" 
                    />
                    <Input 
                        label="Custo da aula por hora" 
                        name="cost" 
                        value={cost}
                        onChange={(e)=>{setCost(e.target.value)}}
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button" onClick={handleAddNEwScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                    
                    {scheduleItems.map((scheduleItem, index) => (
                        <S.ScheduleItem key={index}>
                            <Select 
                                value={scheduleItem.week_day}
                                onChange={e => handleChangeScheduleItemValue({
                                    index, 
                                    field: 'week_day', 
                                    value: e.target.value
                                })}
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
                                name="from" 
                                label="das" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => handleChangeScheduleItemValue({
                                    index, 
                                    field: 'from', 
                                    value: e.target.value
                                })}
                            />
                            <Input 
                                name="to" 
                                label="até" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => handleChangeScheduleItemValue({
                                    index, 
                                    field: 'to', 
                                    value: e.target.value
                                })}
                            />
                        </S.ScheduleItem>
                    ))}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="submit">Cadastrar</button>
                </footer>
            </S.Main>
        </S.Container>
        
    )
}

export default TeacherForm