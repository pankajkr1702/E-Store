import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <UserProvider> 
      <CartProvider>
        <ProductProvider>
          <Router>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products searchTerm={searchTerm} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<OrderSuccess />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
