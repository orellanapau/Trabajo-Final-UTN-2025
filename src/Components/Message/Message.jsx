import React from 'react'
import './Message.css'

//Es la estructura de cada mensaje individual:

function Message(propiedades) {
    return (
        <div className={"container-message " + (propiedades.author === 'Yo' ? 'container-message--right' : 'container-message--left') } >
            <div className='container-message-style'>
                <span className="author-message">
                    {propiedades.author}
                </span>
                <p className='content-message'>
                    {propiedades.content}
                </p>
                <span className='timestamp-message'>
                    Hora: {propiedades.timestamp}
                </span>
            </div>
        </div>
    )
}

export default Message