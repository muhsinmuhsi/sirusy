import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../pages/Admin/Login'
import AdminProtected from '../components/Admin/adminProtected'
import AdminHome from '../pages/Admin/AdminHome'
import AddProduct from '../pages/Admin/AddProducts'
import ProductEdit from '../pages/Admin/EditProducts'
import ManageProducts from '../pages/Admin/ManageProducts'
import AdminNavbar from '../components/Admin/AdminNavbar'
import AddBannerImage from '../pages/Admin/AddBannerImage'

const AdminRoutes = () => {
  return (
    <div>
        
              
             <AdminNavbar/>
              <Routes>
                <Route path='/Login' element={<AdminLogin/>}/>
                <Route path='/Home' element={<AdminProtected><AdminHome/></AdminProtected>}/>
                <Route path='/AddProducts' element={<AdminProtected><AddProduct/></AdminProtected>}/>
                <Route path='/EditProducts/:id' element={<AdminProtected><ProductEdit/></AdminProtected>}/>
                <Route path='/MangeProducts' element={<AdminProtected><ManageProducts/></AdminProtected>}/>
                <Route path='/AddBannerImage' element={<AdminProtected><AddBannerImage/></AdminProtected>}/>
              </Routes>
    </div>
  )
}

export default AdminRoutes