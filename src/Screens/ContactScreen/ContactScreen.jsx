import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { getContactById } from '../../Services/contactService'
import './ContactScreen.css'
import NavBar from '../../Components/NavBar/NavBar'
import ContactList from '../../Components/ContactList/ContactList'
import ICONS from '../../constants/icons'

const ContactScreen = () => {
    const { id_contacto } = useParams()
    const [contact, setContact] = useState(null)

    useEffect(
        () => {
            const contacto = getContactById(id_contacto)
            setContact(contacto)
        },
        [id_contacto]
    )

    return (
        <div className='contact-screen-container'>
            <div className='contact-screen--container-mobile'>
                <NavBar />
                <ContactList />
            </div>
            {contact && (
                <div className='profile-container'>
                    <div className='profile-header'>
                        <Link to={'/contacto/' + contact.id} key={contact.id}><button className='profile-button'><ICONS.Cruz /></button></Link>
                        <span className='profile-text'>Info. del contacto</span>
                    </div>
                    <div className='profile-body'>
                        <div className='profile-info'>
                            <img className='profile-img' src={contact.profile_img} alt="foto de perfil del contacto" />
                            <h2 className='profile-text-h1'>{contact.name}</h2>
                            <span className='profile-small-text'>{contact.phone}</span>
                        </div>

                        <div className='profile-items--status'>
                            <span className='profile-small-text'>Info.</span>
                            <p className='profile-text'>{contact.status}</p>
                        </div>

                        <div className='profile-items--button'>
                            <button className='profile-button red'><ICONS.Bloquear /></button>
                            <span>Bloquear</span>
                        </div>

                        <div className='profile-items--button'>
                            <button className='profile-button red'><ICONS.Eliminar /></button>
                            <span>Eliminar</span>
                        </div>

                    </div>
                </div>)}
        </div>

    )
}

export default ContactScreen