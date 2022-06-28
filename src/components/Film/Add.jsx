import './Add.css';

export default function Add(props) {
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
              onchange='sessionStorage.nomFilm=this.value'
            />
          </td>
          <td>
            <input
              className='inputAdd'
              type='text'
              id='realisateur'
              name='realisateur'
              onchange='sessionStorage.realisateur=this.value'
            />
          </td>
          <td>
            <input
              className='inputAdd'
              type='text'
              id='annee'
              name='annee'
              onchange='sessionStorage.annee=this.value'
            />
          </td>
        </tr>
      </>
    );
  } else {
    return null;
  }
}
