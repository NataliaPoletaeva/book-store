import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Input = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
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
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button className="add-book-btn" type="submit" onClick={addBookToStore}>Add Book</button>
    </form>
  );
};

export default Input;
