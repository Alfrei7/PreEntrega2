import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/peliculas">Películas</Link>
        </li>
        <li className="nav-item">
          <Link to="/series">Series</Link>
        </li>
        <li className="nav-item">
          <Link to="/documentales">Documentales</Link>
        </li>
        <li className="nav-item">
          <Link to="/resenas">Reseñas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;