// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Actions from './pages/Actions/Actions';  
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error'; 
import Footer from './components/Footer/Footer'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><NavBar /><Home /></>} />
          <Route path="/about" element={<><NavBar /><About /></>} />
          <Route path="/actions" element={<><NavBar /><Actions /></>} />
          <Route path="/contact" element={<><NavBar /><Contact /></>} />
          <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
