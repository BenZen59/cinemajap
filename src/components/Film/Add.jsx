import './Add.css';

export default function Add(props) {
  let data = [];

  // eslint-disable-next-line no-unused-vars
  function addMovieFunction() {
    const nomFilm = document.getElementById('nomFilm').value;
    const realisateur = document.getElementById('realisateur').value;
    const annee = document.getElementById('annee').value;
    data.push({ name: nomFilm, director: realisateur, year: annee });
    console.log(data);
  }

  // localStorage.setItem('data', JSON.stringify(data));

  // let retrieve = JSON.parse(localStorage.getItem('data'));
  // console.log(retrieve);

  const addMovie = props.addMovie;
  if (addMovie === true) {
    return (
      <>
        <tr>
          <td>
            <input
              type='text'
              className='inputAdd'
              id='nomFilm'
              name='nomFilm'
            />
          </td>
          <td>
            <input
              className='inputAdd'
              type='text'
              id='realisateur'
              name='realisateur'
            />
          </td>
          <td>
            <input className='inputAdd' type='text' id='annee' name='annee' />
          </td>
        </tr>
      </>
    );
  } else {
    return null;
  }
}
