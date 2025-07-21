import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center space-y-6">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
        <p className="text-gray-600 text-lg">Your order has been placed successfully.</p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
