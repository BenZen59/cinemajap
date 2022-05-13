import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarKModeContext';
import Container from './context/Container';
import 'reset-css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <DarkModeProvider>
                <Container />
              </DarkModeProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
