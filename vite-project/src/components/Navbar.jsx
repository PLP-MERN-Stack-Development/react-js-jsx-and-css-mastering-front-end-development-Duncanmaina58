import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight hover:opacity-90"
        >
          PLP Task Manager
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-indigo-500 dark:hover:text-indigo-400 transition ${
                isActive ? "text-indigo-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/api"
            className={({ isActive }) =>
              `hover:text-indigo-500 dark:hover:text-indigo-400 transition ${
                isActive ? "text-indigo-600 dark:text-indigo-400 font-semibold" : ""
              }`
            }
          >
            API Data
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
