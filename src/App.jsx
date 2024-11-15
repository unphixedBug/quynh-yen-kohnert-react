import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CreationsPage from './pages/CreationsPage';
import ArtworkPage from './pages/ArtworkPage';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/quynh-yen-kohnert-react' : '/'}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/creations" element={<CreationsPage />} />
          <Route path="/creations/:id" element={<ArtworkPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
