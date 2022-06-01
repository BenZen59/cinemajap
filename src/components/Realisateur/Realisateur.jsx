import './Realisateur.css';
import data from './Content';
import { Button, Tooltip, Whisper } from 'rsuite';

export default function Realisateur() {
  function speaker(props) {
    const speaker = <Tooltip>{props}</Tooltip>;
    return speaker;
  }

  return (
    <>
      {' '}
      <h1 className='h1'>Liste des réalisateurs les plus importants</h1>
      <div className='realisateur'>
        {data.map((event) => {
          return (
            <>
              <div className='director'>
                <img src={event.image} alt='director' />
                <p className='nameDirector'>{event.caption}</p>
                <Whisper
                  controlId='control-id-container'
                  preventOverflow
                  trigger='click'
                  speaker={speaker(event.caption)}
                  placement='auto'
                >
                  <Button className='button' appearance='primary'>
                    En savoir plus
                  </Button>
                </Whisper>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
