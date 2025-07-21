import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

function Navbar({ searchTerm, setSearchTerm }) {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-white border-b border-gray-200 py-1.5 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black">ShopHub</Link>

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-black hover:text-[#8DAB7F]">Home</Link>
          <Link to="/products" className="text-black hover:text-[#8DAB7F]">Products</Link>
          <Link to="/categories" className="text-black hover:text-[#8DAB7F]">Categories</Link>

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-2 py-1.5 border rounded-md focus:ring-2 focus:ring-[#8DAB7F] focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative flex items-center space-x-1 text-black hover:text-[#8DAB7F]">
            <FaShoppingCart size={20} />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#8DAB7F] text-xs text-white rounded-full px-1.5">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>

          {user?.name ? (
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-1 text-black" >
              <FaUser size={18} />
              <span>{user.name}</span>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-1 text-black hover:bg-[#CFEE9E] cursor-pointer"
            >
              <FaUser size={18} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
