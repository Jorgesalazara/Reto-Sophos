
import React, { useState, useEffect} from 'react';
import './App.css';



const AlquileresPage = () => {
  const [alquileres, setAlquileres] = useState([]);
  const [nuevoAlquiler, setNuevoAlquiler] = useState({
    id: '',
    titulo: '',
    fechaAlquiler: '',
    fechaVencimiento: ''
  });
  
  let Storage = JSON.parse(
    window.localStorage.getItem("Storage") || "[]"
  );

  useEffect(() => {
    const storedAlquileres = JSON.parse(localStorage.getItem("Storage") || "[]");
    setAlquileres(storedAlquileres);
  }, []);

  const agregarAlquiler = (event) => {
    event.preventDefault();
    setAlquileres([...alquileres, nuevoAlquiler]);
    setNuevoAlquiler({
      id: '',
      titulo: '',
      fechaAlquiler: '',
      fechaVencimiento: ''
    });
    Storage.push(nuevoAlquiler);
    window.localStorage.setItem("Storage", JSON.stringify(Storage));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoAlquiler({ ...nuevoAlquiler, [name]: value });
  };

  const eliminarAlquiler = (id) => {
    const nuevosAlquileres = alquileres.filter((alquiler) => alquiler.id !== id);
    setAlquileres(nuevosAlquileres);
    window.localStorage.setItem("Storage", JSON.stringify(nuevosAlquileres));
  };
  return (
    <div>
      <h1>Registrar alquiler</h1>

      <form onSubmit={agregarAlquiler}>
        <input
          type="text"
          name="id"
          value={nuevoAlquiler.id}
          onChange={handleInputChange}
          placeholder="ID"
        />

        <input
          type="text"
          name="titulo"
          value={nuevoAlquiler.titulo}
          onChange={handleInputChange}
          placeholder="Título"
        />

        <input
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          name="fechaAlquiler"
          value={nuevoAlquiler.fechaAlquiler}
          onChange={handleInputChange}
          placeholder="Fecha de alquiler"
        />

        <input
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          name="fechaVencimiento"
          value={nuevoAlquiler.fechaVencimiento}
          onChange={handleInputChange}
          placeholder="Fecha de vencimiento"
        />

        <button type="submit">Agregar alquiler</button>
      </form>

      <ul>
        {alquileres.map((alquiler, index) => (
          <li key={index} className="info">
            <p>ID:   {alquiler.id}</p>
            
            <p>TITULO:   {alquiler.titulo}</p>
            
            <p>FECHA ALQUILER:   {alquiler.fechaAlquiler}</p>
            
            <p>FECHA VENCIMIENTO:   {alquiler.fechaVencimiento}</p>

            <button className='btnDel' onClick={() => eliminarAlquiler(alquiler.id)}>Eliminar</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlquileresPage;
