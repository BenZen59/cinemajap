import './Add.css';

export default function Add() {
  return (
    <>
      <tr>
        <td>
          <input type='text' className='inputAdd' id='nomFilm' name='nomFilm' />
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
}
