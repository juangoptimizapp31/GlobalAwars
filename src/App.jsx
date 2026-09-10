import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './pages/CountdownPage';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PasswordResetPage from './pages/PasswordResetPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownPage />} />
        <Route path="/home" element={<CountdownPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/categorias/:id" element={<CategoryDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
