import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (
    <div className='container'> 
        <form onSubmit={handleSubmit} className='newMessage-container--form'>
            <input 
                className='newMessage-container--input' 
                name="mensaje" 
                id="mensaje" 
                placeholder='Escribe un mensaje'
                aria-label="Escribe un mensaje">
            </input>
            <button className='newMessage-container--button'><i className="bi bi-send"></i></button>
        </form>
    </div>
    )
}
export 
default NewMessageForm