import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);
    setUser(res.data.user);

    // ✅ Store user in localStorage for persistence
    localStorage.setItem("user", JSON.stringify(res.data.user));

    navigate('/');
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed');
  }
};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="https://bcassetcdn.com/social/ms5rycfg3j/preview.png" alt="Amazon" className="w-32 mb-4" />

      <div className="bg-white p-8 border border-gray-300 rounded w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Sign-In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Email or mobile phone number</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 text-sm focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded p-2 text-sm focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded text-sm font-medium">
            Sign-In
          </button>
        </form>

        <p className="text-xs mt-4">
          By continuing, you agree to ShopHub's <span className="text-blue-600">Conditions of Use</span> and <span className="text-blue-600">Privacy Notice</span>.
        </p>

        <div className="border-t mt-6 pt-4">
          <p className="text-xs">New to ShopHub?</p>
          <Link to="/signup">
            <button className="w-full border border-gray-300 py-2 mt-2 rounded text-sm bg-gray-50 hover:bg-gray-100">
              Create your ShopHub account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
