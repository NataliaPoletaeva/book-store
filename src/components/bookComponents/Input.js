import React from 'react';

const Input = () => (
  <div>
    <form className="input-form">
      <input typeof="text" className="add-book" placeholder="Book title" required />
      <input typeof="text" className="add-author" placeholder="Book author" required />
      <select className="book-list">
        <option> Romance </option>
        <option> Science Fiction </option>
        <option> Action </option>
        <option> Fantasy </option>
        <option> History </option>
      </select>
      <button type="submit" className="add-btn">Add book</button>
    </form>
  </div>
);

export default Input;
