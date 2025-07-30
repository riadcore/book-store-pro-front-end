import React, { useState } from 'react';
import API from '../api/axios';

const AddBookPage = () => {
  const [form, setForm] = useState({ title: '', author: '', genre: '', price: '' });
  const [success, setSuccess] = useState('');
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');

    try {
      await API.post('/books', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Book added successfully!');
      setForm({ title: '', author: '', genre: '', price: '' });
    } catch (err) {
      console.error('Add book error:', err);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required />
        <input name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
