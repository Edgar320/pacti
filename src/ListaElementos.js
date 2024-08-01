import React, { useState } from 'react';
import './ListaElementos.css';

const ListaElementos = () => {
    const [elementos, setElementos] = useState(['Elemento1', 'Elemento2', 'Elemento3']);
    const [nuevoElemento, setNuevoElemento] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nuevoElemento.trim() !== '') {
            setElementos([...elementos, nuevoElemento]);
            setNuevoElemento('');
        }
    };

    return (
        <div>
            <h1>Lista de Elementos</h1>
            <ul>
                {elementos.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    value={nuevoElemento}
                    onChange={(e) => setNuevoElemento(e.target.value)}
                    placeholder="Agregar nuevo elemento"
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default ListaElementos;
