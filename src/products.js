import React from "react";
import { Star, ArrowLeft } from "lucide-react"; // Added ArrowLeft icon
import { Link } from "react-router-dom";
import { useCart } from "./cartcontext"; // import your cart hook
import c1 from "./assets/c1.JPG";
import c2 from "./assets/c2.JPG";
import c3 from "./assets/c3.JPG";
import c4 from "./assets/c4.JPG";
import c5 from "./assets/c5.JPG";
import c6 from "./assets/c6.JPG";

const products = [
  {
    id: 1,
    name: "Teddy Ribbon Gloss",
    price: "₱499",
    img: c1,
    rating: 4.8,
    reviews: 112,
    desc: "A charming mix of deep brown polish with 3D teddy bear and ribbon accents for a playful yet elegant vibe.",
  },
  {
    id: 2,
    name: "Ocean Safari Gel",
    price: "₱549",
    img: c2,
    rating: 4.7,
    reviews: 95,
    desc: "Unique blue and nude tones blended with zebra-inspired patterns and starfish charms for a beach-chic finish.",
  },
  {
    id: 3,
    name: "Mocha Bloom Gloss",
    price: "₱459",
    img: c3,
    rating: 4.9,
    reviews: 132,
    desc: "A sophisticated brown-to-nude ombré adorned with floral gems and golden accents for a luxurious touch.",
  },
  {
    id: 4,
    name: "Sakura Pearl Finish",
    price: "₱499",
    img: c4,
    rating: 4.6,
    reviews: 88,
    desc: "Soft nude and white tones complemented by pink cherry blossoms and tiny pearls — delicate and feminine.",
  },
  {
    id: 5,
    name: "Retro Star Matte",
    price: "₱479",
    img: c5,
    rating: 4.8,
    reviews: 104,
    desc: "A playful combination of sky blue and maroon with polka dots and star patterns — fun and vintage-inspired.",
  },
  {
    id: 6,
    name: "Blush Orchid Sparkle",
    price: "₱599",
    img: c6,
    rating: 4.9,
    reviews: 123,
    desc: "Gentle pinks and lilacs with shimmering floral designs that add a dreamy, romantic glow.",
  },
];

const Products = () => {
  // ✅ Use the hook inside the component
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 py-16 px-6 md:px-10 relative">
      {/* Back Arrow */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center text-pink-600 hover:text-pink-800 transition-colors"
      >
        <ArrowLeft className="w-6 h-6 mr-1" />
        <span className="text-lg font-medium">Back</span>
      </Link>

      {/* Floating Cart Button */}
      <Link
        to="/cart"
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg text-xl z-50"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {cartItems.length}
          </span>
        )}
      </Link>


      <h1 className="text-4xl md:text-5xl font-light text-center text-pink-600 mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} state={{ product }}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-pink-200 transition-shadow duration-300 cursor-pointer">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-pink-600 text-lg font-semibold mb-4">
                  {product.price}
                </p>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 fill-pink-400 text-pink-400" />
                  <span>{product.rating}</span>
                  <span>•</span>
                  <span>{product.reviews} reviews</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
