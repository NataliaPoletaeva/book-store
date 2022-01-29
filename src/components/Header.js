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
      <div className="left">
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
      </div>
      <div className="right">
        <img src="https://img.icons8.com/ios-glyphs/30/0290ff/user--v1.png" alt="user icon" />
      </div>
    </header>
  );
};

export default Header;
