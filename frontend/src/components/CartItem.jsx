import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center hover:shadow-lg transition">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={handleDecrease}
          className="border rounded p-2 hover:bg-gray-100 cursor-pointer"
        >
          <FaMinus className="text-gray-700" />
        </button>

        <span className="font-semibold">{item.quantity}</span>

        <button
          onClick={handleIncrease}
          className="border rounded p-2 hover:bg-gray-100 cursor-pointer"
        >
          <FaPlus className="text-gray-700" />
        </button>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
