import './Film.css';
import { Button } from 'rsuite';

export default function Film() {
  return (
    <div className='film'>
      <div className='champs'>
        <table className='texteChamps'>
          <tr>
            <th>Nom du film</th>
            <th>Réalisateur</th>
            <th>Année de sortie</th>
          </tr>
          <tr>
            <td>Test 1</td>
            <td>Test 2</td>
            <td>Test 3</td>
          </tr>
        </table>
      </div>
      <Button className='button' appearance='primary'>
        Ajouter un film
      </Button>
    </div>
  );
}
