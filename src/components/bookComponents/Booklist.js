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
