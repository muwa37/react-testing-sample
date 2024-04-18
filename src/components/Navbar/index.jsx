import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/' data-testid='main-link'>
        main
      </Link>
      <Link to='/about' data-testid='about-link'>
        about
      </Link>
      <Link to='/users' data-testid='users-link'>
        about
      </Link>
    </nav>
  );
}

export default Navbar;
