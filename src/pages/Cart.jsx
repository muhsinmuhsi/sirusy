import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; // adjust path
import { LucideTrash2 } from 'lucide-react';

const CartPage = () => {
  const { cartItems, updateQuantity,removeFromCart,buyCartItems } = useContext(CartContext);

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
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-white text-black rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-white text-black rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right flex flex-col justify-between">
              <p className="font-semibold">
                ₹{item.price * item.quantity}
              </p>

              <button className='border border-white rounded p-1 hover:bg-gray-700'
              onClick={()=>removeFromCart(item._id)}
              >
                <LucideTrash2/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-10 border-t border-white pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-2xl font-bold">Total: ₹{totalPrice}</p>
            <button
              onClick={() =>buyCartItems()}
              className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition w-full sm:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
    </div>
  );
};

export default CartPage;
