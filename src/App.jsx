import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import DetailedProduct from './pages/DetailedProduct'
import { CartContext } from './components/CartContext'
import CartPage from './pages/Cart'

function App() {

  return (
    <>
    <div>
      <CartContext>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<DetailedProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>

      </Routes>
      </BrowserRouter>
      </CartContext>
      
    </div>

    </>
  )
}

export default App
