// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookListPage from './pages/BookListPage';
import AddBookPage from './pages/AddBookPage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/books" element={
          <PrivateRoute>
            <BookListPage />
          </PrivateRoute>
        } />
        <Route path="/add-book" element={
          <PrivateRoute>
            <AddBookPage />
          </PrivateRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
