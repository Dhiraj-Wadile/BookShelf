import React from 'react';

const BookCard = ({ book, addToBookshelf }) => (
  <div className="book-card">
    <h2>{book.title}</h2>
    <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
    <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
  </div>
);

export default BookCard;
