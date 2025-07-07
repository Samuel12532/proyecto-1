
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CivilizationsPage from './pages/CivilizationsPage';
import UnitsPage from './pages/UnitsPage';
import StructuresPage from './pages/StructuresPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-aoe-dark">
      <Navbar />
      <main className="p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/civilizations" element={<CivilizationsPage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/structures" element={<StructuresPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
