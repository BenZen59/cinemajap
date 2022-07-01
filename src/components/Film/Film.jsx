import { useState, useEffect } from 'react';
import './Film.css';
import Add from './Add';

export default function Film() {
  const [showRegister, setShowRegister] = useState(true);
  const [addMovie, setAddMovie] = useState(false);
  const [movielist, setMovielist] = useState([]);
  console.log(movielist);

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('movielist'));
    if (newList) setMovielist(newList);
  }, []);

  useEffect(() => {
    localStorage.setItem('movielist', JSON.stringify(movielist));
  }, [movielist]);

  function showButtonRegister() {
    setShowRegister(!showRegister);
  }

  function addMovieFunction() {
    const nomFilm = document.getElementById('nomFilm').value;
    const realisateur = document.getElementById('realisateur').value;
    const annee = document.getElementById('annee').value;
    setMovielist((oldArray) => [
      ...oldArray,
      { name: nomFilm, director: realisateur, year: annee },
    ]);
    showButtonRegister();
    setAddMovie(!addMovie);
    const notAdd = document.querySelector('.buttonAdd');
    notAdd.style.backgroundColor = 'black';
    notAdd.style.cursor = 'pointer';
    notAdd.style.color = 'whitesmoke';
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
            {/* {movielist.map((movie) => {
              return (
                <tr>
                  <td>{movie.name}</td>
                  <td>{movie.director}</td>
                  <td>{movie.year}</td>
                </tr>
              );
            })} */}
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
