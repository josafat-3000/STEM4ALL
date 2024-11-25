import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Stem4All</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/asignatura/fisica">Física</Link></li>
        <li><Link to="/asignatura/quimica">Química</Link></li>
        <li><Link to="/about">¿Quiénes somos?</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
