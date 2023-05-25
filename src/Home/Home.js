import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Tienda de Videojuegos</h1>
      <p>¡Administra tus alquileres y consulta información importante!</p>
      <h2>Funcionalidades:</h2>
      <nav>
        <ul>
          <li>
            <Link to="/App">Crear Alquiler</Link>
          </li>
          <li>
            <Link to="/Page">Gestión de Clientes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
