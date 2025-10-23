// src/layouts/AppLayout.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;