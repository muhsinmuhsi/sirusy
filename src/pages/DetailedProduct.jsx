import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import api from '../api';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart,buyNowSingleProduct } = useContext(CartContext);


  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.images?.[0] || res.data.image); 
      } catch (err) {
        console.error('Failed to load product details:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center p-4">Loading product...</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Product Images */}
      <div className="mb-4">
        <img
          src={selectedImage}
          alt="Main product"
          className="w-full h-64 object-cover rounded-xl border"
        />
        {product.images && (
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
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description }</p>
        <p className="text-lg font-bold">₹{product.price}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <button
          className="border hover:bg-gray-200 border-black font-semibold py-2 rounded-lg w-full"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        <button className="bg-black hover:bg-gray-700 text-white font-semibold py-2 rounded-lg w-full" 
        onClick={() => {
          buyNowSingleProduct(product);
        }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
