import { Home, LogOut } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = () => {
    const navigate=useNavigate()

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to Logout ?");
        if(confirmDelete){
            localStorage.removeItem('admin_token'); 
            navigate('/admin/login'); 
        }
        
      };

  return (
    <nav className='w-full shadow-md px-4 py-3'>
        <div className="max-w-7xl mx-auto flex items-center justify-around">
            <div>
                <button className='font-semibold' onClick={handleLogout} ><LogOut className='inline '/> Logout</button>
            </div>
            <div>
               <button onClick={()=>navigate('/admin/Home')}><Home /></button> 
            </div>

        </div>
    </nav>
  )
}

export default AdminNavbar