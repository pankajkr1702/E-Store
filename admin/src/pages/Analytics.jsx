import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaUsers, FaShoppingCart } from "react-icons/fa";

export default function Analytics() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    {
      label: "Total Products",
      value: stats.totalProducts || 0,
      icon: <FaBoxOpen size={30} className="text-blue-500" />,
      bg: "from-blue-100 to-blue-50",
    },
    {
      label: "Total Users",
      value: stats.totalUsers || 0,
      icon: <FaUsers size={30} className="text-green-500" />,
      bg: "from-green-100 to-green-50",
    },
    {
      label: "Total Orders",
      value: stats.totalOrders || 0,
      icon: <FaShoppingCart size={30} className="text-purple-500" />,
      bg: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Analytics Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${card.bg} p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-gray-600 text-sm font-medium">{card.label}</h2>
                <p className="text-4xl font-bold text-gray-800 mt-1">{card.value}</p>
              </div>
              <div className="bg-white p-3 rounded-full shadow">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
