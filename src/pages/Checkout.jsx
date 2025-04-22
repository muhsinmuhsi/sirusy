import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';
import PaymentOptions from '../components/PaymentOptions';
import api from '../api';

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (paymentMethod === 'razorpay') {
      try {
        const { data } = await api.post('/payment', { cartItems, totalPrice });
        const options = {
          amount: data.amount,
          currency: data.currency,
          name: "Your Store",
          description: "Test Transaction",
          order_id: data.id,
          handler: async (response) => {
            await api.post('/payment/verify', response);
            alert("Payment Successful");
          },
          prefill: {
            name: shippingInfo.name,
            email: shippingInfo.email,
            contact: shippingInfo.phone,
          },
        };
        if (typeof window.Razorpay !== "undefined") {
            const rzp = new window.Razorpay(options);
            rzp.open();
          } else {
            alert("Razorpay SDK failed to load. Please refresh the page.");
          }
      } catch (err) {
        console.error("Error creating order", err);
        alert("Failed to initiate payment");
      }
    } else {
      alert("Cash on Delivery selected. Order confirmed!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-4xl font-bold font-serif mb-8">Checkout</h2>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        
        {/* Shipping Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={shippingInfo.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={shippingInfo.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </form>
        </div>

        {/* Cart Review + Payment */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Review Your Order</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-right font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="mt-4">
            <PaymentOptions handlePaymentMethodChange={handlePaymentMethodChange} />
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {paymentMethod === 'razorpay' ? 'Pay Now' : 'Confirm Order (COD)'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
