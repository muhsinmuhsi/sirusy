import { LogOut } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate=useNavigate()
  const totalProducts = 128; // You can replace this with dynamic data later

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        <div className="mb-10">
          <h2 className="text-xl text-gray-600">Total Products</h2>
          <p className="text-5xl font-extrabold text-blue-600 mt-2">{totalProducts}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button onClick={()=>navigate('/admin/MangeProducts')} className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-2xl text-xl shadow-md transition duration-300">
            Manage Products
          </button>
          <button onClick={()=>navigate('/admin/AddProducts')} className="w-full md:w-1/2 bg-green-500 hover:bg-green-600 text-white font-semibold py-6 rounded-2xl text-xl shadow-md transition duration-300">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome