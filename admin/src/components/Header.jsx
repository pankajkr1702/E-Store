import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="h-16 bg-gray-100 flex items-center justify-between px-6 border-b shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Admin</span>
        <FaUserCircle className="text-gray-600 w-7 h-7" />
      </div>
    </header>
  );
}
