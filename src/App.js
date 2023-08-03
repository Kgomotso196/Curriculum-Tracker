import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GlobalStyles from './styles/GlobalStyles';
import CryptoDetails from './components/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <div>
          <NavBar />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CryptoDetails />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
