import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-r from-[#8DAB7F] to-[#CFEE9E] text-black min-h-[60vh] flex items-center overflow-hidden">
      {/* Optional overlay for depth */}
      <div className="absolute inset-0 bg-black/0 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center w-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Upgrade Your Shopping with{' '}
            <span className="text-[#B92C22] drop-shadow-lg">Exclusive Deals</span>
          </h1>
          <p className="text-[#9EA3B0] md:text-l mb-5 text-gray-800 animate-fade-in">
            Explore trending gadgets, accessories, and more. Fast shipping, unbeatable prices.
          </p>
          <button
            className="w-fit px-8 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-[#6EFD7C] hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#8DAB7F] animate-fade-in-up cursor-pointer"
            onClick={() => navigate('/products')}
          >
            Shop Now
          </button>
        </div>
        <div className="flex justify-center items-center h-full">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/157d3c8c56f97bb2.jpg?q=60"
            alt="Ecommerce Hero"
            className="w-500 md:w-5000 lg:w-[40rem] rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          @keyframes float {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-16px);}
          }
          .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
          .animate-fade-in-up { animation: fade-in-up 0.8s 0.2s ease-out both; }
          .animate-fade-in { animation: fade-in 1s 0.4s ease-out both; }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
export default HeroSection;