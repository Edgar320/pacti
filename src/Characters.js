import React, { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  });

  return (
    <main>
      {characters.map(personaje => (
        <article key={personaje.id}>
          <div className="image-container">
            <img src={personaje.image} alt={personaje.name} />
          </div>
          <h2>{personaje.name}</h2>
          <span>Estado de Personajes: {personaje.status}</span>
        </article>
      ))}
    </main>
  );
};

export default Characters;
