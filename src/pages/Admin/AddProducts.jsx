import React, { useState } from "react";
import adminApi from "../../adminApi";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: 1,
    images: [], // for multiple images
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use FormData here if sending images to backend
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("category", formData.category);
    form.append("quantity", formData.quantity);

    formData.images.forEach((image) => {
      form.append("images", image);
    });


    try {
         adminApi.post('/products', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
    } catch (error) {
        console.log(error,'error');
        toast.error('error to add product')
    }
    toast.success('product added');
    console.log("Form submitted!", formData);
    setFormData({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    images: [],

    })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Add New Product</h2>
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
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Health & Fitness">Health & Fitness</option>
                <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
                <option value="Electronics & Accessories">Electronics & Accessories</option>
                <option value="Hobbies & Essentials">Hobbies & Essentials</option>
                <option value="Men's">Men's</option>
                <option value="Women's">Women's</option>
                <option value="Kid's">Kid's</option>
                <option value="MKIS">MKIS</option>
              </select>
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
              <label className="block mb-2 text-gray-600">Upload Images</label>
              <input 
                type="file"
                multiple
                onChange={handleImageChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                accept="image/*"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg text-lg transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
