import './Content';
import './Card.css';
import card from './Content';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';

export default function Card() {
  return (
    <div className='card'>
      {card.map((event) => {
        return (
          <>
            <div className='inside'>
              <img src={event.picture} alt='card' />
              <NavLink to={event.router}>
                <Button className='buttonCard' renderAs='button'>
                  <span> {event.content}</span>
                </Button>
              </NavLink>
            </div>
          </>
        );
      })}
    </div>
  );
}
