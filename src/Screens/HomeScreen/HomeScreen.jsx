import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import './HomeScreen.css'
import NavBar from '../../Components/NavBar/NavBar'

const HomeScreen = () => {
    return (
        <div className='home-screen-container'>
            <NavBar/>
            <ContactList/>
            <div className='menssages-container'>
                <img className='menssages-container-img' src="https://img.freepik.com/premium-vector/hand-drawn-lemonade-cartoon-illustration_23-2150864429.jpg?w=2000" alt="Imagen principal"/>
                <h1>Descarga Lemonade para Windows</h1>
                <p className='menssages-container-p'>Descarga la aplicación para Windows y disfruta una experiencia más rápida</p>
                <button>Descargar</button>
            </div>
            
        </div>
    )
}

export default HomeScreen