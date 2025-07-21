import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal > 0 ? Number((subtotal * 0.1).toFixed(2)) : 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white rounded-md shadow p-6">
          <h1 className="text-2xl font-semibold border-b pb-4 mb-6">My Cart ({cart.length})</h1>

          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              Your cart is empty.
              <div className="mt-4">
                <Link to="/products" className="text-blue-600 underline">Browse Products</Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-md shadow p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">PRICE DETAILS</h2>
          <hr className="mb-4" />
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Price ({cart.length} items)</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">- ₹0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>GST (10%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span className="text-green-600">₹{total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 w-full inline-block text-center bg-[#2874f0] hover:bg-yellow-600 text-white py-3 px-6 rounded-md font-medium transition"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
