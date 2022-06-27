import { useState } from 'react';
import './Film.css';
import Add from './Add';

export default function Film() {
  const [showRegister, setShowRegister] = useState(true);
  const [addMovie, setAddMovie] = useState(false);

  function showButtonRegister() {
    setShowRegister(!showRegister);
  }

  function addMovieButton() {
    setAddMovie(!addMovie);
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
            <Add />
          </table>
        </div>
        <button className='buttonAdd'>Ajouter un film</button>
      </div>
      <button className='enregistrer' hidden={showRegister}>
        Enregistrer le film
      </button>
    </>
  );
}
