import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get('/books', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, [token]);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? <p>No books found.</p> : (
        <ul>
          {books.map(book => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author} – ${book.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookListPage;
