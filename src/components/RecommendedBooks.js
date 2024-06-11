import React from 'react';

const RecommendedBooks = ({ books }) => (
  <div className="recommended-books">
    <h2>Recommended Books</h2>
    <div className="book-list">
      {books.map(book => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RecommendedBooks;
