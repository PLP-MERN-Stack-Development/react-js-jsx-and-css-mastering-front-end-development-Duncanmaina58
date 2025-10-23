import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import Card from "./components/Card";

// Home Page (Counter + Task Manager)
function Home() {
  // const [count, setCount] = useState(0);

  return (
    <main className="flex-1 bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-950 py-12 px-6">
      <div className="w-full flex flex-col items-center gap-10">
        {/* Counter Section
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Card title="Interactive Counter">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-lg mb-4">
                You can increment or decrement the counter below.
              </p>

              <div className="flex items-center gap-6 my-4">
                <button
                  onClick={() => setCount((count) => count - 1)}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  −
                </button>
                <span className="text-3xl font-bold">{count}</span>
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>

              <p className="text-gray-400 mt-2">
                Edit{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                  src/App.jsx
                </code>{" "}
                to experiment with HMR.
              </p>
            </div>
          </Card>
        </div> */}

        {/* Task Manager Section */}
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Card title="Task Manager">
            <p className="text-gray-400 mb-4 text-center">
              Manage your daily tasks — add, complete, or delete them easily.
            </p>
            <TaskManager />
          </Card>
        </div>
      </div>
    </main>
  );
}

// API Data Page
function ApiData() {
  return (
    <main className="flex-1 bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-950 py-12 px-6">
      <div className="w-full flex flex-col items-center">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <Card title="API Data">
            <p className="text-gray-400 text-center">
              Fetch and display data from a public API here.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}

// App Wrapper
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Router>
        <Navbar />

        {/* Main Content */}
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
