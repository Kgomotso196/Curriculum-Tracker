import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {}
        <>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Profile />} />
            </Routes>
          </main>
        </>
      </Router>
    </Provider>
  );
}

export default App;
