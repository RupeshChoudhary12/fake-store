import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import React from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Electronics from './pages/Electronics'
import Jewlery from './pages/Jewlery'
import MenClothing from './pages/MenClothing'
import WomenClothing from './pages/WomenClothing'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import { ProductProvider } from './context/poduct/ProductContext'
import { CartProvider } from './context/poduct/cart/CartContext'

const App = () => {
  return (
    <>
     <Router>
    <ProductProvider>
      <CartProvider>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/elctroincs' element={<Electronics/>}/>
        <Route path='/jewlery' element={<Jewlery/>}/>
        <Route path='/menclothing' element={<MenClothing/>}/>
        <Route path='/womenclothing' element={<WomenClothing/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </CartProvider>

    </ProductProvider>
     </Router>
     

    </>
  )
}

export default App
