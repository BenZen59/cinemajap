import './Realisateur.css';
import { Button, Tooltip, Whisper } from 'rsuite';

export default function Realisateur() {
  const speaker = <Tooltip>This is a tooltip</Tooltip>;
  return (
    <div className='realisateur'>
      <h4>React Suite Tooltip Component</h4>
      <Whisper
        controlId='control-id-container'
        preventOverflow
        trigger='click'
        speaker={speaker}
        placement='auto'
      >
        <Button className='button' appearance='primary'>
          Click
        </Button>
      </Whisper>
    </div>
  );
}
