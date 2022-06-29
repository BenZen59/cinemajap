import { useState } from 'react';
import './Film.css';
import Add from './Add';
import addMovieFunction from './Add';

export default function Film() {
  const [showRegister, setShowRegister] = useState(true);
  const [addMovie, setAddMovie] = useState(false);

  function showButtonRegister() {
    setShowRegister(!showRegister);
  }

  function addMovieButton() {
    const add = document.querySelector('.buttonAdd');
    setAddMovie(!addMovie);
    add.style.backgroundColor = 'grey';
    add.style.cursor = 'not-allowed';
    add.style.color = 'black';
    showButtonRegister();
  }

  return (
    <>
      <div className='film'>
        <div className='champs'>
          <table className='texteChamps'>
            <tr>
              <th>Nom du film</th>
              <th>Réalisateur</th>
              <th>Année de sortie</th>
            </tr>
            <Add addMovie={addMovie} />
          </table>
        </div>
        <button
          className='buttonAdd'
          onClick={addMovieButton}
          disabled={addMovie}
        >
          Ajouter un film
        </button>
      </div>
      <button
        className='enregistrer'
        hidden={showRegister}
        onClick={addMovieFunction}
      >
        Enregistrer le film
      </button>
    </>
  );
}
