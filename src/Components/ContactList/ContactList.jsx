import React from 'react'
import { getAllContacts } from '../../Services/contactService'
import { Link } from 'react-router'
import './ContactList.css'
import ICONS from '../../constants/icons'

const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link className='contact-list-link' to={'/contacto/' + contact.id} key={contact.id}>
            <div className='contact-list-container'>
                <img className='contact-list-container--img' src={contact.profile_img} alt="Imagen del contacto" />
                <div>
                    <h2 className='contact-list-container--name'>{contact.name} </h2>
                    <span className='contact-list-container--connected'> {contact.is_connected ? 'Online' : 'Offline'} </span>
                </div>
            </div>
        </Link>
    )
}

const ContactList = () => {
    const contacts = getAllContacts()
    const contact_list_jsx = contacts.map(
        (contact) => {
            return <ContactItem
                contact={contact}
                key={contact.id}
            />
        }
    )

    return (
        <div className='all-contact-list-container'>
            <header className = 'header-container' >
                <div className='header-container--content'>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/638/343/original/lemon-slice-color-png.png" alt="" width={'35px'}/>
                    <h2 className='header-container--h2'>Lemonade</h2>
                </div>
                
                <div className='header-container--content'>
                    <button className='header-container--button'><ICONS.NewChat/></button>
                    <button className='header-container--button'><ICONS.TresPuntos/></button>
                </div>
            </header >    
            {contact_list_jsx}
        </div>
    )
}

export default ContactList