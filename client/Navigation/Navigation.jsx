import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <ul className="navigation">
    <li>
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li>
      <Link to="/about" className="nav-link">About</Link>
    </li>
  </ul>
);

export default Navigation;
