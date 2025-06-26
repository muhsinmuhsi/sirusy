import React, { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import PaymentOptions from "../components/PaymentOptions";
import api from "../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

const CheckoutPage = () => {
  const { checkoutItems, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const navigate=useNavigate()
  const totalPrice = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    const { name, email, address, phone } = shippingInfo;
    if (!name || !email || !address || !phone) {
      toast.error("Please fill out all shipping information fields.");
      return;
    }

    if (paymentMethod === "razorpay") {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Razorpay SDK failed to load. Please refresh the page.");
        return;
      }

      try {
        setShippingInfo({
           name: "",
           email: "",
           address: "",
           phone: "",
          });
        const confirmPay = window.confirm("Are you sure? This process may not be undone!");

        if(confirmPay){
          const { data } = await api.post("/payment", {
          checkoutItems,
          totalPrice,
        });
        const options = {
          key: razorpayKey,
          amount: data.amount,
          currency: data.currency,
          name: "Siruzy",
          description: "Test Transaction",
          order_id: data.id,
          handler: async (response) => {
            await api.post("/payment/verify", {
              response,
              checkoutItems,
              totalPrice,
              shippingInfo,
              paymentMethod
            });
            clearCart();
            alert("Payment Successful");

            navigate('/');
            
          },
          prefill: {
            name: shippingInfo.name,
            email: shippingInfo.email,
            contact: shippingInfo.phone,
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
        }
        
      } catch (err) {
        console.error("Error creating order", err);
        clearCart();
        alert("Failed to initiate payment");
      }
    } else {
      setShippingInfo({
        name: "",
        email: "",
        address: "",
        phone: "",
       });
      const confirmOrder = window.confirm("Are you sure? This process may not be undone!");
      if (confirmOrder) {
        try {
          await api.post("/sendEmail", {
            checkoutItems,
            totalPrice,
            shippingInfo,
            paymentMethod,
          });
      
          clearCart(); 
      
          toast.success("Cash on Delivery selected. Order confirmed! Confirmation email sent.");
          console.log("Cart cleared and toast shown");
          setTimeout(() => {
            navigate("/");
          }, 500); // delay to ensure state is flushed

        } catch (error) {
          console.error("Error sending COD confirmation email:", error);
          toast.error("Order placed but failed to send confirmation email.");
        }
      }
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
            {checkoutItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-right font-medium">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="mt-4">
            <PaymentOptions
              handlePaymentMethodChange={handlePaymentMethodChange}
            />
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {paymentMethod === "razorpay" ? "Pay Now" : "Confirm Order (COD)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
