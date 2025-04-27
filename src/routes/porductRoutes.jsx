import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/DetailedProduct'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import { CartProvider } from '../components/CartContext'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

const ProductRoutes = () => {
  return (
    <div>
        
        <CartProvider>
            <Navbar/>
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/product/:id' element={<ProductDetails/>}/>
             <Route path='/cart' element={<CartPage/>}/>
             <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
        </CartProvider>


    </div>
  )
}

export default ProductRoutes