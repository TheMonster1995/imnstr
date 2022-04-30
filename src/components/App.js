import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landing from './Landing';
import Experiences from './Experiences';
import Services from './Services';
import Projects from './Projects';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="container font-monospace">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/experiences" element={<Experiences />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
