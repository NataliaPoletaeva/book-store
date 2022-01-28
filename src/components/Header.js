import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      title: 'CATEGORIES',
    },
  ];

  return (
    <header>
      <h1 className="logo">Nat&apos;s Bookstore</h1>
      <nav>
        <ul className="nav-menu">
          {
            links.map((link) => (
              <li className="nav-items" key={link.id}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
