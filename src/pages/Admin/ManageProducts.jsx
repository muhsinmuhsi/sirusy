import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import adminApi from '../../adminApi';
import toast from 'react-hot-toast';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
    // Fetch products from dummy API
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await api.get('/products'); // Replace with your own API if needed
          setProducts(res.data.data || []);
        } catch (err) {
          console.error("Failed to fetch products", err);
        }
      };
      fetchProducts();
    }, []);

  
    // Handle edit button
    const handleEdit = (id) => {
      navigate(`/admin/EditProducts/${id}`);
    };
  
    // Handle delete button
    const handleDelete =async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (confirmDelete) {
        try {
            const response= await adminApi.delete(`/products/${id}`)
            setProducts(prev => prev.filter(product => product.id !== id));
            console.log("Deleted product with id:", id);
            if(response.status===201){
                toast.success('product deleted success fully')
            }
        } catch (error) {
            toast.error('error to delete product ')
            console.log(error,'error to delete product');
        }
        
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-10">Admin - Product List</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img 
                 src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
  
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleEdit(product._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ManageProducts