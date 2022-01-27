import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../../redux/books/books';

const Input = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: Date.now().toString(),
      title,
      category,
    };

    dispatch(addBookAPI(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form className="form">
      <input
        className="input-title"
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="input-author"
        type="text"
        placeholder="Book author"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <select name="category" className="input-category">
        <option value="romance">Romance</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
      </select>
      <button className="add-book-btn" type="submit" onClick={addBookToStore}>Add Book</button>
    </form>
  );
};

export default Input;
