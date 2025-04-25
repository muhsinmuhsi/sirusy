import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const navigate = useNavigate();


  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (!product || !product._id) {
      console.warn("Invalid product passed to addToCart:", product);
      return;
    }
  
    const existing = cartItems.find((item) => item._id === product._id);
    console.log("Existing item:", existing);
  
    if (existing) {
      // Product already in cart – increase quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
      toast.success('quantity updated')      
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success('product added to cart ')
      
    }
  };
  
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return ;
    setCartItems(cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCartItems([]);

  const buyNowSingleProduct = (product) => {
    setCheckoutItems([{ ...product, quantity: 1 }]);
    navigate('/checkout');
  };


  const buyCartItems = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    setCheckoutItems(cartItems);
    navigate('/checkout');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart,buyNowSingleProduct,
      buyCartItems,checkoutItems, }}>
      {children}
    </CartContext.Provider>
  );
};
