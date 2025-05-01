import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import adminApi from "../../adminApi";
import toast from "react-hot-toast";

const ProductEdit = () => {
  const { id } = useParams(); // Get product id from URL
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: 1,
    existingImages: [],
    newImages: [],
  });

  useEffect(() => {
    // Fetch specific product details
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`); // your API endpoint
        const product = res.data;
        setFormData({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          quantity: product.quantity,
          existingImages: product.images || [],
          newImages: [],
        });
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      newImages: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("category", formData.category);
    form.append("quantity", formData.quantity);
  
    // Append existing images
    form.append("images", JSON.stringify(formData.existingImages));
  
    // Append new images
    formData.newImages.forEach((img) => {
      form.append("images", img);
    });
  
    adminApi.put(`/products/${id}`, form, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then( res=> {
     console.log("product updated",res);
      toast.success('Product updated')
    }).catch(err => {
      console.error("Update error", err);
      toast.error('Update error')
    });

    setFormData({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    existingImages: [],
    newImages: [],
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600">Title</label>
            <input 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-600">Price</label>
              <input 
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-600">Category</label>
              <input 
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-600">Quantity</label>
              <input 
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-600">Upload New Images</label>
              <input 
                type="file"
                multiple
                onChange={handleNewImagesChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                accept="image/*"
              />
            </div>
          </div>

          {/* Show Existing Images */}
          {formData.existingImages.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Existing Images:</h3>
              <div className="flex flex-wrap gap-4">
                {formData.existingImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt="Product"
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg transition duration-300"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
