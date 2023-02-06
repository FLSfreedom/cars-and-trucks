import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer Greetings='¡Hola comprador! tenemos el vehículo que buscás'/> }/>
        <Route path='/category/:idCategory' element={ <ItemListContainer/> } />
        <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
      </Routes>
      <ItemCount/>
    </BrowserRouter>
  )
}

export default App
