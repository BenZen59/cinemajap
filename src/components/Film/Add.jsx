import './Add.css';

export default function Add(props) {
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
