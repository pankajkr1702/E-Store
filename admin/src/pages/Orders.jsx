import React from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const dummyOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    date: "2024-07-20",
    total: 2499,
    status: "Delivered",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    date: "2024-07-19",
    total: 1299,
    status: "Processing",
  },
];

export default function Orders() {
  const getStatusBadge = (status) => {
    if (status === "Delivered") {
      return (
        <span className="flex items-center gap-1 text-green-600 font-medium">
          <FaCheckCircle /> Delivered
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-yellow-500 font-medium">
        <FaClock /> Processing
      </span>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">📦 Orders Management</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Total (₹)</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-100">
            {dummyOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4 font-semibold">₹{order.total}</td>
                <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
