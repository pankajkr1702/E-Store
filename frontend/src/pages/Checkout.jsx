import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const tax = subtotal > 0 ? Number((subtotal * 0.1).toFixed(2)) : 0;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("User not logged in");
    return;
  }

  try {
    await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user._id,
        products: cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        totalAmount: subtotal + shipping + tax,
      }),
    });
    navigate("/success");
  } catch (error) {
    console.error("Failed to place order:", error);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Checkout Summary</h1>
          <p className="text-gray-500">Review your order before placing it.</p>
        </div>

        <div className="p-6">
          {cart.length > 0 ? (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex space-x-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="font-bold text-gray-700">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        <div className="p-6 bg-gray-50 space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Tax (10%)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span className="text-green-600">₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="p-6 flex justify-between items-center bg-gray-50">
          <Link to="/" className="text-blue-500 hover:underline">← Continue Shopping</Link>
          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow cursor-pointer transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;