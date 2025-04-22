import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import DetailedProduct from './pages/DetailedProduct'
import { CartProvider } from './components/CartContext'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'

function App() {

  return (
    <>
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<DetailedProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>

      </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </div>

    </>
  )
}

export default App
