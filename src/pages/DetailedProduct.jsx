import React, { useState } from 'react';
import  Image from '../assets/image1.jpg';

const ProductDetails = () => {
  const product = {
    title: 'Stylish Cotton T-Shirt',
    description: 'This cotton t-shirt is soft, breathable, and perfect for casual wear.',
    price: '₹499',
    images: [
      Image,
      'https://via.placeholder.com/300x300?text=Image+2',
      'https://via.placeholder.com/300x300?text=Image+3',
      'https://via.placeholder.com/300x300?text=Image+4',
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Product Images */}
      <div className="mb-4">
        <img
          src={selectedImage}
          alt="Main product"
          className="w-full h-64 object-cover rounded-xl border"
        />
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${
                selectedImage === img ? 'ring-2 ring-blue-500' : ''
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold ">{product.price}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <button className="border hover:bg-gray-200 border-black  font-semibold py-2 rounded-lg w-full">
          Add to Cart
        </button>
        <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 rounded-lg w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
