import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaUsers,
  FaChartBar,
  FaCog,
  FaHome,
  FaPlus,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 text-gray-800 z-50">
      <div className="h-16 flex items-center justify-center font-bold text-lg border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-1 rounded-md">
            <FaBoxOpen className="w-5 h-5" />
          </div>
          <span>Store Admin</span>
        </div>
      </div>

      <nav className="flex flex-col p-4 gap-2">
        <NavItem to="/" icon={<FaHome />} label="Dashboard" />
        <NavItem to="/orders" icon={<FaShoppingCart />} label="Orders" />
        <NavItem to="/products" icon={<FaBoxOpen />} label="Products" />
        <NavItem to="/add-product" icon={<FaPlus />} label="Add Product" />  {/* ✅ Added this */}
        <NavItem to="/users" icon={<FaUsers />} label="Customers" />
        <NavItem to="/analytics" icon={<FaChartBar />} label="Analytics" />
        <NavItem to="/settings" icon={<FaCog />} label="Settings" />
      </nav>
    </aside>
  );
}

// ✅ Reusable NavItem component
function NavItem({ to, icon, label, badge }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition ${
          isActive ? "bg-gray-100 text-black font-semibold" : "hover:bg-gray-100"
        }`
      }
    >
      <span className="flex items-center gap-3">
        <span className="text-gray-500">{icon}</span>
        {label}
      </span>
      {badge && (
        <span className="ml-auto bg-black text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  );
}
