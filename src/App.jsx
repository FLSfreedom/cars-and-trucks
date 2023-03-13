import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartContextProvider } from './Context/CartContext.jsx'
import CartContainer from './components/CartContainer/CartContainer.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer Greetings='¡Hola comprador! tenemos el vehículo que buscás'/> }/>
          <Route path='/category/:idCategory' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          <Route path='/cart' element={ <CartContainer/>  }/>  
        </Routes>
        <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
