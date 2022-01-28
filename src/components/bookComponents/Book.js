import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBookAPI } from '../../redux/books/books';
import './bookComponents.css';

const Book = (props) => {
  const {
    book: {
      id, title, category,
    },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookAPI(id));
  };

  const progress = 1;

  return (
    <>
      <div className="title-container">
        <h3 className="book-title">
          {title}
        </h3>
        <h3 className="book-author">
          {category}
        </h3>
        <div className="book-btns">
          <button className="remove-btn" type="button">Comments</button>
          <button className="remove-btn" type="button" onClick={removeBookFromStore}>Remove</button>
          <button className="remove-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-bar-c">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
          className="progress-bar"
        />
        <div className="progress-value-c">
          <p className="progress-percentage">
            {progress}
            %
          </p>
          <p className="progress-completed">Completed</p>
        </div>
      </div>
      <div className="progress-chapter">
        <h2 className="chapter-h2">CURRENT CHAPTER</h2>
        <h3 className="chapter-h3">Chapter 1</h3>
        <button type="button" className="progress-btn">Update Progress</button>
      </div>
    </>
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
