import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
    const [is_open, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!is_open)
    }

    return (
        <header>
            <nav className='nav-desktop'>
                <a href="">Chats</a>
                <a href="">Estados</a>
                <a href="">Canales</a>
            </nav>
            {
                is_open &&
                <nav className='nav-mobile'>
                    <a href="">Chats</a>
                    <a href="">Estados</a>
                    <a href="">Canales</a>
                </nav>
            }
            <button 
                className='btn-menu'
                onClick={toggleMenu}
            ><i className="bi bi-list"></i></button>
            
            <div className='text-container'>
                <img src="https://static.vecteezy.com/system/resources/previews/012/638/343/original/lemon-slice-color-png.png" alt="" width={'50px'}/>
                <h2>Lemonade Chat</h2>
            </div>
            
        </header>
    )

}

export default NavBar