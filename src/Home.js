import React from 'react';

const Home = (props) => {
  return (
    <div>
      <p>hola</p>
      <button className="botonAlquiler" onClick={props.handleButtonClick}>
        CREAR ALQUILERES
      </button>
    </div>
  );
};

export default Home;
