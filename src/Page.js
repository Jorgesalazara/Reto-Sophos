import React from "react";
import { useState, useEffect } from "react";
import "./Page.css";
const Clientes = () => {
    const [Clientes, setClientes] = useState([]);
    const [nuevoCliente, setNuevoCliente] = useState({
        id: '',
        nombre: '',
        Telefono: '',
        fechaVencimiento: '',
        Juego: ''
    });
    
let Storage = JSON.parse(
window.localStorage.getItem("Clientes") || "[]"
);

useEffect(() => {
    const storedClientes = JSON.parse(localStorage.getItem("Clientes") || "[]");
    setClientes(storedClientes);
}, []);

const agregarCliente = (event) => {
    event.preventDefault();
    setClientes([...Clientes, nuevoCliente]);
    setNuevoCliente({
    id: '',
    nombre: '',
    Telefono: '',
    fechaVencimiento: '',
    Juego: ''
    });
    Storage.push(nuevoCliente);
    window.localStorage.setItem("Clientes", JSON.stringify(Storage));
};

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoCliente({ ...nuevoCliente, [name]: value });    
};

    return (
        <div>
            <header>
            <link rel="stylesheet" href="Page.css"></link>
            </header>
            
            <h1>Registrar cliente</h1>
            <form onSubmit={agregarCliente}>
                <input
                    type="text"
                    name="id"
                    value={nuevoCliente.id}
                    onChange={handleInputChange}
                    placeholder="ID"
                />
                <input
                    type="text"
                    name="nombre"
                    value={nuevoCliente.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    name="telefono"
                    value={nuevoCliente.telefono}
                    onChange={handleInputChange}
                    placeholder="Telefono"
                />
                <input
                    type="date"
                    name="fechaVencimiento"
                    value={nuevoCliente.fechaVencimiento}
                    onChange={handleInputChange}
                    placeholder="Fecha de vencimiento"
                />
                <input
                    type="text"
                    name="juego"
                    value={nuevoCliente.juegos}
                    onChange={handleInputChange}
                    placeholder="Juego"
                />

                <button type="submit">Agregar</button>
            </form>
            <ul>
                {Clientes.map((cliente, index) => (
            <li key={index} className="info">
                <p>ID:   {cliente.id}</p>
                
                <p>Nombre:  {cliente.nombre}</p>
                
                <p>Telefono:  {cliente.telefono}</p>
                
                <p>Juego:  {cliente.juego}</p>
                
                <p>Fecha de Vencimiento:  {cliente.fechaVencimiento}</p>
                
            </li>
            ))}
            </ul>
        </div>
    );
}

export default Clientes;