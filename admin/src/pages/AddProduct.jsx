import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [useLocalImage, setUseLocalImage] = useState(false);
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageURLChange = (e) => {
    setForm({ ...form, image: e.target.value });
    setPreview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('price', form.price);

      if (useLocalImage && form.image instanceof File) {
          data.append('imageFile', form.image); // 🔥 correct key for multer
      } else {
          data.append('imageUrl', form.image);
}

      await axios.post('http://localhost:5000/api/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('✅ Product added successfully!');
      setForm({ name: '', price: '', image: '' });
      setPreview('');
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add product');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">➕ Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Toggle buttons for image input mode */}
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="imageType"
              checked={!useLocalImage}
              onChange={() => {
                setUseLocalImage(false);
                setForm({ ...form, image: '' });
                setPreview('');
              }}
            />
            <span className="text-gray-700">Online Image URL</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="imageType"
              checked={useLocalImage}
              onChange={() => {
                setUseLocalImage(true);
                setForm({ ...form, image: '' });
                setPreview('');
              }}
            />
            <span className="text-gray-700">Upload from Computer</span>
          </label>
        </div>

        {/* Conditional input */}
        {useLocalImage ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageFileChange}
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        ) : (
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleImageURLChange}
            placeholder="Image URL"
            className="w-full border border-gray-300 rounded-lg p-3"
            required
          />
        )}

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover border rounded-lg shadow hover:scale-105 transition-transform"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
