export const saveToBookshelf = (book) => {
    let bookshelf = localStorage.getItem('bookshelf');
    if (bookshelf) {
      bookshelf = JSON.parse(bookshelf);
    } else {
      bookshelf = [];
    }
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };
  
  export const getBookshelf = () => {
    let bookshelf = localStorage.getItem('bookshelf');
    return bookshelf ? JSON.parse(bookshelf) : [];
  };
  