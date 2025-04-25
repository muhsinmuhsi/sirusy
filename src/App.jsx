import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import DetailedProduct from './pages/DetailedProduct'
import { CartProvider } from './components/CartContext'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <div>
      
      <BrowserRouter>
      <CartProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#fff',   // white background
            color: '#000',        // black text
          },
          success: {
            iconTheme: {
              primary: '#000', // tick (check) background
              secondary: '#fff', // tick (check) color
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4d4f', // optional: red error icon background
              secondary: '#fff',
            },
          },
        }}
      />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<DetailedProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>

      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
