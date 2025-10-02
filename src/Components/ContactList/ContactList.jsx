import React from 'react'
import { getAllContacts } from '../../Services/contactService'
import { Link } from 'react-router'
import './ContactList.css'

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
            {contact_list_jsx}
        </div>
    )
}

export default ContactList