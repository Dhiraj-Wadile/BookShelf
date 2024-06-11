import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';
import { getBookshelf } from '../utils';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBookshelf());
  }, []);

  return (
    <div>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookshelfPage;
