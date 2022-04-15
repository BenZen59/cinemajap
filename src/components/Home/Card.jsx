import './Content';
import './Card.css';
import card from './Content';

export default function Card() {
  return (
    <div className='card'>
      {card.map((event) => {
        return (
          <>
            <div className='inside'>
              <img src={event.picture} alt='card' />
              <p>{event.content}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
