import React from 'react'
import Message from '../Message/Message'
import './MessagesList.css'

const MessagesList = (props) => {

    //Aca estaba la lista de mensajes

    const listaMensajesJSX = props.messages.map(
        (parametro) => {
            return (
                <Message
                    key={parametro.id}
                    author={parametro.author}
                    content={parametro.content}
                    timestamp={parametro.timestamp}
                />
            )
        }
    )

    return (
        <div className='container-messageslist'>
            {listaMensajesJSX}            
        </div>
    )
}

export default MessagesList