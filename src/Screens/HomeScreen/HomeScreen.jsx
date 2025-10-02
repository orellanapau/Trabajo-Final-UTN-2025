import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import './HomeScreen.css'
import NavBar from '../../Components/NavBar/NavBar'

const HomeScreen = () => {
    return (
        <div className='home-screen-container'>
            <NavBar/>
            <div className='home-screen-container-row'>
                <div>
                    <ContactList/>
                </div>

                <div className='menssages-container'>
                    <span>Todavía no has seleccionado ningún contacto.</span>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen