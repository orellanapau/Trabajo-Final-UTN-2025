import React, { useEffect, useState } from 'react'
import MessagesList from '../../Components/MessageList/MessagesList'
import NavBar from '../../Components/NavBar/NavBar'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './MessageScreen.css'

function MessageScreen() {

    const {id_contacto} = useParams()

    useEffect(
        //acción a realizar
        () => {
            const contacto = getContactById(id_contacto)
            setMessages (contacto.messages)
        },
        //dependencias
        [id_contacto]
    )
    
    const [messages, setMessages] = useState([
        {
            id: 1,
            author: 'Yo',
            content: "Todo bien?",
            timestamp: '16:17'
        },
        {
            id: 2,
            author: 'Maria',
            content: "Si",
            timestamp: '16:18'
        }
    ])

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
        <div className='message-screen-all-container'>
            <NavBar />
            <div className='message-screen--container'>
                <div className='message-screen--contact-list-container'>
                    <ContactList/>
                </div>
                <div className='message-screen--messages-container'>
                    <MessagesList messages={messages} />
                    <div className='message-screen--form-container'>
                    <NewMessageForm onCreateNewMessage={onCreateNewMessage}/>
                    </div>
                                        
                </div>
            </div>
            
        </div>
    )

}
export default MessageScreen