import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Datos de ejemplo de los juegos
  const juegos = [
    {
      nombre: 'Juego 1',
      fechaLanzamiento: '01/01/2022',
      productora: 'Productora 1',
      plataforma: 'Xbox, PS4, PC',
    },
    {
      nombre: 'Juego 2',
      fechaLanzamiento: '02/02/2022',
      productora: 'Productora 2',
      plataforma: 'Xbox, PC'
    },
    {
      nombre: 'Juego 3',
      fechaLanzamiento: '03/03/2022',
      productora: 'Productora 3',
      plataforma: 'PS4, PC'
    },
  ];

  return (
    <div className="container1">
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

      <div className="games-container">
        <div className="games-list">
          <h2>Nuestros juegos</h2>
          <ul>
            {juegos.map((juego, index) => (
              <li key={index}>
                <h3>{juego.nombre}</h3>
                <p>Fecha de lanzamiento: {juego.fechaLanzamiento}</p>
                <p>Productora: {juego.productora}</p>
                <p>Plataforma: {juego.plataforma}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rented-game">
          <h2>Juego más rentado del mes</h2>
          <div className="card">
            <h3>Juego X</h3>
            <p>Fecha de lanzamiento: XX/XX/XXXX</p>
            <p>Productora: Productora X</p>
            <p>Plataforma: Plataforma X</p>
          </div>
        </div>
        <div className="ClienteMes">
          <h2>Cliente del Mes</h2>
          <div className="card">
            <h3>Cliente X</h3>
            <p>Juegos : Juegos X</p>
            <p>Alquileres: Numero X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
