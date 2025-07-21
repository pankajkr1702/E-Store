import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
}, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Customer Management</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-3">User ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{user._id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 text-green-500 font-semibold">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
