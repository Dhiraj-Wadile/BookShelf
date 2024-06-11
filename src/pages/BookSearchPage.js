import React, { useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';
import RecommendedBooks from '../components/RecommendedBooks';
import { saveToBookshelf } from '../utils';

const recommendedBooks = [
  { key: '1', title: 'To Kill a Mockingbird', author_name: ['Harper Lee'] },
  { key: '2', title: '1984', author_name: ['George Orwell'] },
  { key: '3', title: 'Pride and Prejudice', author_name: ['Jane Austen'] },
  // Add more recommended books here...
];

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (q) => {
    if (q.length > 0) {
      const res = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
      setBooks(res.data.docs);
    } else {
      setBooks([]);
    }
  };

  const handleInputChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    searchBooks(q);
  };

  const addToBookshelf = (book) => {
    saveToBookshelf(book);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books"
      />
      <BookList books={books} addToBookshelf={addToBookshelf} />
      <RecommendedBooks books={recommendedBooks} />
    </div>
  );
};

export default BookSearchPage;
