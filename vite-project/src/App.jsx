// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import AppLayout from './Layout/AppLayout.jsx';
import TaskManagerPage from './pages/TaskManagerPage.jsx';
import APIDataPage from './pages/ApiDataPage.jsx';

// Simple 404 Component
const NotFound = () => (
  <div className="text-center py-20">
    <h2 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-400">404 - Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<TaskManagerPage />} />
        <Route path="/api-data" element={<APIDataPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;