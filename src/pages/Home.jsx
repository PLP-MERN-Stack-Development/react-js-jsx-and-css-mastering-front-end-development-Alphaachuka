import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A modern React application built with Vite and Tailwind CSS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Task Management">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create, manage, and organize your tasks efficiently with our intuitive task manager.
          </p>
          <Link to="/tasks">
            <Button variant="primary" className="w-full">
              Go to Tasks
            </Button>
          </Link>
        </Card>

        <Card title="API Integration">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Explore data fetched from external APIs with loading states and error handling.
          </p>
          <Link to="/api-data">
            <Button variant="primary" className="w-full">
              View API Data
            </Button>
          </Link>
        </Card>

        <Card title="Dark Mode">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Toggle between light and dark themes for a comfortable viewing experience.
          </p>
          <Button variant="secondary" className="w-full">
            Theme Switcher in Navbar
          </Button>
        </Card>
      </div>

      <div className="mt-12">
        <Card title="Features">
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✅ React 18 with Vite for fast development</li>
            <li>✅ Tailwind CSS for responsive styling</li>
            <li>✅ React Router for navigation</li>
            <li>✅ Context API for state management</li>
            <li>✅ Custom hooks for reusable logic</li>
            <li>✅ LocalStorage persistence</li>
            <li>✅ API integration with error handling</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;
