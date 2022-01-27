import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <Book book={book} key={book.id} />
        ))
      ) : (
        <h3 className="booklist-h3">There is no books!</h3>
      )}
    </div>
  );
};

export default Booklist;
