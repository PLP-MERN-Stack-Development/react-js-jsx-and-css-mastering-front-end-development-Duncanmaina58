import { useTheme } from '../context/ThemeContext';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false }) => {
  const { theme } = useTheme();
  
  let baseStyles = "font-semibold py-2 px-4 rounded transition-colors duration-200 ease-in-out disabled:opacity-50";
  let variantStyles = "";

  switch (variant) {
    case 'secondary':
      variantStyles = `bg-gray-200 text-gray-800 hover:bg-gray-300 ${theme === 'dark' ? 'dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600' : ''}`;
      break;
    case 'danger':
      variantStyles = "bg-red-600 text-white hover:bg-red-700";
      break;
    case 'primary':
    default:
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg";
      break;
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;