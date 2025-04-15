import React, { useState } from 'react';
import image from '../assets/image1.jpg'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Minimal Hoodie',
      details: '100% Cotton, Black',
      price: 799,
      quantity: 1,
      image: image ,
    },
    {
      id: 2,
      title: 'Classic Sneakers',
      details: 'White Edition, Size 9',
      price: 1299,
      quantity: 2,
      image: 'https://via.placeholder.com/150?text=Sneakers',
    },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 border border-white rounded-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-300">{item.details}</p>
              <p className="mt-2 font-bold">₹{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="px-2 py-1 bg-white text-black rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="px-2 py-1 bg-white text-black rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 p-4 border-t border-white flex justify-between text-lg font-bold">
        <span>Total:</span>
        <span>₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default CartPage;
