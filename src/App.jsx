import React from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './styles/global.css'
import ContactScreen from './Screens/ContactScreen/ContactScreen'

const App = () => {
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={<HomeScreen/>}
        />
        <Route 
          path='/contacto/:id_contacto' 
          element={<MessageScreen/>}
        />
        <Route 
          path='/profile/:id_contacto' 
          element={<ContactScreen/>}
        />
      </Routes>
    </div>
  )
}

export default App