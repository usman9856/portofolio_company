import React from 'react';
import './App.css';
import HomePage from './Component/HomePage';
import Footer from './Component/Footer.jsx';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full">
      <Router>
        <div className='app-body'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
