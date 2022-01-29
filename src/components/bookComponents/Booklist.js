import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBookAPI } from '../../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookAPI());
  }, [dispatch]);
  return (
    <ul className="booklist">
      {books.length ? (
        books.map((book) => (
          <li key={book.id} className="book-container">
            <Book book={book} />
          </li>
        ))
      ) : (
        <h3 className="booklist-h3">There is no books!</h3>
      )}
    </ul>
  );
};

export default Booklist;
