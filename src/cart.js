import React from "react";
import { useCart } from "./cartcontext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("₱", "")) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl">
        {/* Title */}
       {/* Header Section */}
        <div className="flex justify-between items-center mb-6 relative">
        {/* Back Button on the Left */}
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="absolute left-0 bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-full transition-all shadow-sm"
        >
            ← Back
        </motion.button>

        {/* Title Centered */}
        <h1 className="text-3xl font-semibold text-pink-600 text-center w-full">
            Your Cart 🛒
        </h1>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-600">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="Empty cart"
              className="w-40 h-40 opacity-70"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium shadow-md"
            >
              Go Shopping 
            </motion.button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
                  className="flex items-center border border-gray-200 rounded-2xl p-4 shadow-sm bg-pink-50 mb-3"
                >
                  {/* LEFT: Product Image */}
                  <img
                    src={item.img || "https://via.placeholder.com/120"}
                    alt={item.title || item.name || "Product"}
                    className="w-28 h-28 object-cover rounded-xl shadow-md mr-4"
                  />

                  {/* MIDDLE: Product Info */}
                  <div className="flex flex-col flex-1">
                    <h2 className="font-semibold text-gray-800 text-lg">
                      {item.title || item.name || "Unnamed Product"}
                    </h2>
                    {item.desc && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                    <p className="text-pink-500 font-medium mt-2">
                      {item.price} × {item.quantity}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      <span className="font-medium">Length:</span> {item.length}{" "}
                      | <span className="font-medium">Finish:</span> {item.finish}{" "}
                      | <span className="font-medium">Shape:</span> {item.shape}
                    </p>
                  </div>

                  {/* RIGHT: Remove Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full transition-all shadow-md ml-4"
                  >
                    Remove
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cart Summary */}
            <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Total:{" "}
                <span className="text-pink-600">
                  {totalPrice.toFixed(2)}
                </span>
              </h3>

              <div className="flex gap-4 mt-4 md:mt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearCart}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-full transition-all"
                >
                  Clear Cart
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium shadow-md"
                >
                  Checkout
                </motion.button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
