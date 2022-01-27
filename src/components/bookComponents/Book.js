import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    book: {
      id, title, category,
    },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book-container">
      <h3 className="book-title">
        {title}
      </h3>
      <h3 className="book-author">
        {category}
      </h3>
      <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
