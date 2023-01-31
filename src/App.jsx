import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer Greetings="Hola Juan, tenemos el vehículo que buscás"/>
    </div>
  )
}

export default App
