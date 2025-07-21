import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      fetchProducts(); // Refresh the list after delete
    } catch (error) {
      console.log("Failed to delete:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
        {products
            .filter(
            (product) =>
                product.name?.trim() !== "" &&
                product.price &&
                product.image?.trim() !== ""
            )
            .map((product) => (
            <tr key={product._id} className="border-t">
                <td className="p-3">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                />
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3 flex gap-2">
                <button
                    onClick={() => navigate(`/edit/${product._id}`)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(product._id)}
                    className="px-4 py-1 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
                </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
