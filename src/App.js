import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route
        path="/"
        element={(
          <Books />)}
      />
      <Route
        path="/categories"
        element={(
          <Categories />)}
      />
    </Routes>
  </div>
);

export default App;
