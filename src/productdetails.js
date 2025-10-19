import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./cartcontext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState("");
  const [finish, setFinish] = useState("");
  const [shape, setShape] = useState("");

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-pink-300 text-white px-6 py-2 rounded-full"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!length || !finish || !shape) {
      toast.warn("Please select nail length, finish, and shape before adding to cart.", {
        position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "colored",
      style: {
    background: "#f9c5d1",
    color: "#4b0f1e",
    fontWeight: "600",
    borderRadius: "12px",
  },
    });
      return;
    }

    if (quantity < 1) {
      toast.error("Please enter a valid quantity (at least 1).", {
        position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "colored",
      style: {
    background: "#f9c5d1",
    color: "#4b0f1e",
    fontWeight: "600",
    borderRadius: "12px",
  },
    });
      return;
    }

    const productToAdd = {
      ...product,
      quantity,
      length,
      finish,
      shape,
    };

    addToCart(productToAdd);

    // Success toast
    toast.success("Added to cart successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "colored",
      style: {
    background: "#f9c5d1",
    color: "#4b0f1e",
    fontWeight: "600",
    borderRadius: "12px",
  },
    });
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 w-full flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">{product.desc}</p>
          <p className="text-pink-500 font-bold text-2xl mb-4">{product.price}</p>

          {/* Options */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 w-24"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Length</label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select Length</option>
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Finish</label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select Finish</option>
                <option>Matte</option>
                <option>Glossy</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">Shape</label>
              <select
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="">Select Shape</option>
                <option>Coffin</option>
                <option>Almond</option>
                <option>Square</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-all"
            >
              Back
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
