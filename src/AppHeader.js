import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>Hackney</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Search Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/first-contact">First Contact</NavLink>
        </li>
        <li>
          <NavLink to="/new-contact">New Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
