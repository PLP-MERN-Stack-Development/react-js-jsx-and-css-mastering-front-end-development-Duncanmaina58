import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import Button from './Button'; // Reusing our custom Button

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            PLP Task Manager
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/api-data" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              API Data
            </Link>
            {/* Theme Switcher Button */}
            <Button variant="secondary" onClick={toggleTheme} className="w-10 h-10 p-0 flex items-center justify-center rounded-full">
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;