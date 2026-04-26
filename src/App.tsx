/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import Login from './components/views/Login';
import Home from './components/views/Home';
import Dashboard from './components/views/Dashboard';
import Grades from './components/views/Grades';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      case 'grades':
        return <Grades />;
      case 'profile':
        return (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-primary dark:text-white">โปรไฟล์</h2>
            <p className="text-primary/60 dark:text-white/60">คุณสมชาย มั่นใจ</p>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="mt-8 px-8 py-3 bg-red-100 text-red-600 rounded-2xl font-bold"
            >
              ออกจากระบบ
            </button>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderView()}
    </Layout>
  );
}
