import React from 'react'
import './NewMessageForm.css'
import ICONS from '../../constants/icons'


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
            <div className='newMessage-container--form-mobile'>
                <div className='newMessage-container--button'><ICONS.Emoji/></div>
                <div className='newMessage-container--button'><ICONS.Clip/></div>                
            </div>
            <input 
                className='newMessage-container--input' 
                name="mensaje" 
                id="mensaje" 
                placeholder='Escribe un mensaje'
                >
            </input>
            <button className='newMessage-container--button'><ICONS.Enviar/></button>
            
        </form>
    </div>
    )
}
export 
default NewMessageForm