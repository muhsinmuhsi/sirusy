import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/DetailedProduct'
import CartPage from '../pages/Cart'
import { CartProvider } from '../components/CartContext'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import CategoryPage from '../components/CategoryPage'
import CheckoutPage from '../pages/Checkout'
import AboutUs from '../pages/AboutUs'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import FloatingWhatsAppButton from '../components/WhatsappButton'

const ProductRoutes = () => {
  return (
    <div>
        
        <CartProvider>
            <Navbar/>
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/product/:id' element={<ProductDetails/>}/>
             <Route path='/product/category/:category' element={<CategoryPage/>}/>
             <Route path='/cart' element={<CartPage/>}/>
             <Route path='/checkout' element={<CheckoutPage/>}/>
             <Route path='/AboutUs' element={<AboutUs/>}/>
             <Route path='/Privacy-Policy' element={<PrivacyPolicy/>}/>
        </Routes>
        <FloatingWhatsAppButton/>
        </CartProvider>


    </div>
  )
}

export default ProductRoutes