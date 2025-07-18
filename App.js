import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';
import RedirectPage from './pages/redirectpage';
import StatisticsPage from './pages/staticpage';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/short/:code" element={<RedirectPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
