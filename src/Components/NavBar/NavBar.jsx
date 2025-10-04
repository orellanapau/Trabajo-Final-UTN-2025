import React, { useState } from 'react'
import './NavBar.css'
import ICONS from '../../constants/icons'

const NavBar = () => {

    return (
        <div className='navbar-container'> 
            <div className='navbar-container--button-container'>
                <button className='navbar-container--button black-button'><ICONS.Chat/></button>
                <button className='navbar-container--button'><ICONS.Estados/></button>
                <button className='navbar-container--button'><ICONS.Grupos/></button>
            </div>

            <div className='navbar-container--button-container'>
                <button className='navbar-container--button'> <ICONS.Settings/> </button>
                <img className='navbar-container--img' src="https://static.vecteezy.com/system/resources/previews/012/638/343/original/lemon-slice-color-png.png" alt=""/>
            </div>

        </div>
    )

}

export default NavBar