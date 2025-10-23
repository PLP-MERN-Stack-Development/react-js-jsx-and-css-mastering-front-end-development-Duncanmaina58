function Footer() {
  return (
    <footer className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Built with ❤️ using <span className="font-semibold text-indigo-600 dark:text-indigo-400">React + TailwindCSS</span>
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
