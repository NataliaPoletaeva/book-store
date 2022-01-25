import React from 'react';

const Booklist = () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Genre 1',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      genre: 'Genre 3',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Genre 2',
    },
  ];

  return (
    <div>
      <h2 className="booklist-header">Book List</h2>
      <ul className="booklist">
        {
                    books.map((book) => (
                      <li key={book.id}>
                        <div key={book.id}>{book.genre}</div>
                        <div key={book.id}>{book.title}</div>
                        <div key={book.id}>{book.author}</div>
                        <button type="button">Remove</button>
                      </li>
                    ))
                }
      </ul>
    </div>
  );
};

export default Booklist;
