import React, { createContext, useContext, useState } from "react";

const cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add product to cart (ensures unique ID)
  const addToCart = (product) => {
    const id = product.id || product._id || product.title; // fallback to title
    const exists = cartItems.find((item) => item.id === id);

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, id, quantity: product.quantity || 1 },
      ]);
    }
  };

  // ✅ Remove product by ID
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ✅ Clear entire cart
  const clearCart = () => setCartItems([]);

  return (
    <cartcontext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </cartcontext.Provider>
  );
};

export const useCart = () => useContext(cartcontext);
