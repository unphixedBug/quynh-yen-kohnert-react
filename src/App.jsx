import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CreationsPage from './pages/CreationsPage';
import HomePage from './pages/HomePage';
// Importe ici les autres pages si nécessaire

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/creations" element={<CreationsPage />} />
          {/* Ajoute d'autres routes ici pour les autres pages */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
