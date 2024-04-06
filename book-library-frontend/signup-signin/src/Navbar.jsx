import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Addbook">Add</Link>
        </li>
        <li>
          <Link to="/SeeBook">See</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;