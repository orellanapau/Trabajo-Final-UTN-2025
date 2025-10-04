import React, { useEffect, useState } from 'react'
import MessagesList from '../../Components/MessageList/MessagesList'
import NavBar from '../../Components/NavBar/NavBar'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { Link, useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './MessageScreen.css'
import ContactHeader from '../../Components/ContactHeader/ContactHeader'
import ICONS from '../../constants/icons'

function MessageScreen() {

    const {id_contacto} = useParams()
    const [contact, setContact] = useState(null)

    useEffect(
        //acción a realizar
        () => {
            const contacto = getContactById(id_contacto)
            setMessages (contacto.messages)
            setContact (contacto)
        },
        //dependencias
        [id_contacto]
    )
    
    const [messages, setMessages] = useState([])

    const onCreateNewMessage = (new_message) => {
        const new_message_object = {
            content: new_message,
            author: 'Yo',
            timestamp: '11:11',
            id: messages.length + 1
        }
        setMessages([...messages, new_message_object]) //Para clonar los mensajes
    }


    return (

        <div className='message-screen--container'>
            <div className='message-screen--container-mobile'>
                <NavBar/>
                <ContactList/>
            </div>
            <div className='message-screen--contact-container'>
                <div className='message-screen--header'>
                    <Link to={'/'}><button className='message-screen--button-mobile'><ICONS.Atras/></button></Link>
                    {contact && <ContactHeader contact={contact}/>}
                </div>
                <div className='message-screen--messages'>
                    <MessagesList messages={messages}/>
                    <NewMessageForm 
                        onCreateNewMessage={onCreateNewMessage}
                        className='message-screen--form'/>
                </div>
            </div>

        </div>
    )

}
export default MessageScreen