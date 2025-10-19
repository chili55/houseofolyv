import React from "react";
import "./index.css"; 
import { useCart } from "./cartcontext";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2 .jpg";
import p3 from "./assets/p3.jpeg";
import p4 from "./assets/p4.jpeg";
import p5 from "./assets/p5.jpeg";
import c1 from "./assets/c1.JPG";
import c2 from "./assets/c2.JPG";
import c3 from "./assets/c3.JPG";
import c4 from "./assets/c4.JPG";
import { Link } from "react-router-dom";

const Home = () => {
  // ✅ Hook must be inside the component
  const { cartItems } = useCart();

  return (
    <div className="bg-pink-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src={p1}
          alt="Nails"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg ">
                House
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                of
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                OLYV
            </h1>
          </div>

          <p className="mt-4 text-lg md:text-4xl font-cursive text-white/90">
           "Defining beauty, one nail at a time."
          </p>
          <Link to="/products">
            <button className="mt-6 px-8 py-3 bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full shadow-lg transition-all duration-300">
              View Products
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Classic",
              desc: "Clean, shape, and polish for timeless elegance.",
              img: p3,
            },
            {
              title: "Cat Eye",
              desc: "Trendy designs customized to your unique style.",
              img: p4,
            },
            {
              title: "Nail Art",
              desc: "Long-lasting color with a glossy, flawless finish.",
              img: p5,
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-pink-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-20 bg-pink-50">
        <h2 className="text-3xl font-semibold text-center mb-10 text-pink-600">
          Our Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[c1, c2, c3, c4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Gallery"
              className="rounded-2xl object-cover w-full h-64 hover:opacity-80 transition"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={p2}
              alt="About House of Olyv"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-pink-600 mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="text-pink-500 font-medium">House of Olyv</span>, we’re creating 
              a safe, welcoming space in beauty and beyond. These press-on nails are 
              designed to make you feel confident without hiding what makes you unique. 
              Each set is all vegan and cruelty-free, offering stylish options that 
              celebrate individuality while being kind to the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section className="py-20 px-6 md:px-20 bg-pink-100 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-6">
          Create an Account
        </h2>
        <p className="text-gray-700 mb-8">
          Ready for your next nail transformation? Reach out below!
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="w-full p-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400 outline-none"
          />
          
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition">
            Create Account
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white text-gray-500 text-sm border-t border-pink-100">
        © {new Date().getFullYear()} House of Olyv • All Rights Reserved
      </footer>

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
    </div>
  );
};

export default Home;
