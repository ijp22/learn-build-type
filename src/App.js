import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import { Game, GameOver, Home, HighScores } from './pages';

// Styled Components
import { GlobalStyles, Container, Main } from './styled';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Main>
        <Container>
          <Navbar />
          <Routes>
            <Route path='/game' element={<Game />} />
            <Route path='/high-scores' element={<HighScores />} />
            <Route path='/game-over' element={<GameOver />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
