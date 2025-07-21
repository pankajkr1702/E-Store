import React, { useEffect, useState } from "react";

export default function Analytics() {
    const [stats, setStats] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/analytics')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Analytics Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow text-center">
                    <h2 className="text-gray-500">Total Products</h2>
                    <p className="text-3xl font-bold">{stats.totalProducts || 0}</p>
                </div>
                <div className="bg-white p-6 rounded shadow text-center">
                    <h2 className="text-gray-500">Total Users</h2>
                    <p className="text-3xl font-bold">{stats.totalUsers || 0}</p>
                </div>
                <div className="bg-white p-6 rounded shadow text-center">
                    <h2 className="text-gray-500">Total Orders</h2>
                    <p className="text-3xl font-bold">{stats.totalOrders || 0}</p>
                </div>
            </div>
        </div>
    );
}
