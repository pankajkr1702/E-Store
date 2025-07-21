import React from "react";

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
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders Management</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Total (₹)</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {dummyOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">₹{order.total}</td>
                <td className={`px-6 py-4 font-semibold ${order.status === "Delivered" ? "text-green-500" : "text-yellow-500"}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
