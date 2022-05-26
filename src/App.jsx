import { DarkModeProvider } from './context/DarKModeContext';
import Container from './context/Container';
import 'reset-css';

function App() {
  return (
    <div className='App'>
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;
