import React from 'react';

const Bookshelf = ({ books }) => (
  <div className="bookshelf">
    {books.length > 0 ? books.map(book => (
      <div key={book.key} className="book-card">
        <h2>{book.title}</h2>
        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      </div>
    )) : <p>No books in your bookshelf.</p>}
  </div>
);

export default Bookshelf;
