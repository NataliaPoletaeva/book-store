import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      title: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      title: 'Categories',
    },
  ];

  return (
    <header>
      <h1>Bookstore</h1>
      <nav>
        <ul className="nav-menu">
          {
                        links.map((link) => (
                          <li key={link.id}>
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
