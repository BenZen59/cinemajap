import './Studio.css';
import data from './Content';
import { Button, Tooltip, Whisper } from 'rsuite';

export default function Studio() {
  function speaker(caption, presentation) {
    const speaker = (
      <Tooltip>
        <div className='pTooltip'>
          <p className='directorTooltip'>{caption}</p>
          <p className='presentationTooltip'>{presentation}</p>
        </div>
      </Tooltip>
    );
    return speaker;
  }

  return (
    <>
      {' '}
      <h1 className='h1'>Liste des studios les plus importants</h1>
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
                  speaker={speaker(
                    event.caption,
                    event.presentation,
                    event.movie
                  )}
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
