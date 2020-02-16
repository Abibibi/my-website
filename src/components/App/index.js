// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Header from 'src/components/Header';
import Projects from 'src/containers/Projects';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Header />
    <Projects />
  </div>
);

// == Export
export default App;
