import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from './components/CartContext'
import { Toaster } from 'react-hot-toast';
import ProductRoutes from './routes/porductRoutes'
import AdminRoutes from './routes/adminRoutes'

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
      <Routes>
      <Route path="/*" element={<ProductRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
