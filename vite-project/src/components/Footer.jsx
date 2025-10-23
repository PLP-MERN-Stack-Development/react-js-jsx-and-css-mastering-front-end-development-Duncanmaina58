// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-500 dark:text-gray-400 text-sm">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Terms</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub Repo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;