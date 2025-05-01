import React, { useState } from "react";
import adminApi from "../../adminApi";
import toast from "react-hot-toast";

const AddBannerImage = () => {
  const [formData, setFormData] = useState({
    image:null,
    alt:"" 
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData(prev => ({
//       ...prev,
//       images: files,
//     }));
//   };

  const handleSubmit = (e) => {

    e.preventDefault();
    const form = new FormData();
    form.append("alt",formData.alt);
    if(formData.image){form.append("image",formData.image)}

    try {
         adminApi.post('/bannerImage', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
    } catch (error) {
        console.log(error,'error');
        toast.error('error to add bannerImage')
    }
    toast.success('BannerImage added');
    console.log("Form submitted!", formData);
    setFormData({
        image:'',
        alt:'',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">Add New BannerImage</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600">alt</label>
            <input 
              type="text"
              name="alt"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-600">Upload Image</label>
              <input 
                type="file"
                name="image"
                onChange={handleChange}
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

export default AddBannerImage;
