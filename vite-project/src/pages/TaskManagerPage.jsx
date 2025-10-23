// src/pages/TaskManagerPage.jsx
import { useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card'; // Assume a simple Card component exists

// Simple Card component for structural completeness
// const Card = ({ children, className = '' }) => (
//     <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-shadow duration-300 ${className}`}>
//         {children}
//     </div>
// );


const TaskManagerPage = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('All'); // All, Active, Completed

  // --- Task Operations ---
  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // --- Filtering Logic (useMemo for optimization) ---
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      case 'All':
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // --- UI Components ---
  const FilterButton = ({ filterName }) => (
    <Button
      variant={filter === filterName ? 'primary' : 'secondary'}
      onClick={() => setFilter(filterName)}
      className="px-3 py-1 text-sm"
    >
      {filterName}
    </Button>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">Task Manager</h1>

      <Card>
        <form onSubmit={addTask} className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <Button type="submit" disabled={newTaskText.trim() === ''}>
            Add Task
          </Button>
        </form>
      </Card>

      <Card>
        <div className="flex justify-start gap-3 mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
          <FilterButton filterName="All" />
          <FilterButton filterName="Active" />
          <FilterButton filterName="Completed" />
        </div>

        {filteredTasks.length === 0 ? (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400 py-4">No tasks found for this filter.</p>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map(task => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                  task.completed ? 'bg-green-50 dark:bg-green-900/30 line-through text-gray-500 dark:text-gray-400' : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <span className="flex-grow mr-4 break-words" onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
                  {task.text}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant={task.completed ? 'secondary' : 'primary'}
                    onClick={() => toggleTask(task.id)}
                    className="p-1 w-8 h-8 flex items-center justify-center text-sm"
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteTask(task.id)}
                    className="p-1 w-8 h-8 flex items-center justify-center text-sm"
                  >
                    🗑️
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default TaskManagerPage;