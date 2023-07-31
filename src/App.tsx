import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { DetailsProperty } from './pages/details-property/details-property';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details-property/:id" element={<DetailsProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
