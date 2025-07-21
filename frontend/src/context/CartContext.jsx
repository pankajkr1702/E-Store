import React, { createContext, useState } from 'react';

// ✅ You need to create and export CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find(item => item.id === product._id);
    if (existingProduct) {
      return prevCart.map(item =>
        item.id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prevCart, { ...product, id: product._id, quantity: 1 }];
  });
};


  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => 
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
