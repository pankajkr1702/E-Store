import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col justify-between h-96 bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover rounded-xl mb-4"
        />
        <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
        <p className="text-gray-600 text-base mb-2">₹{product.price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;