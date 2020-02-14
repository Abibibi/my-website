// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from 'src/components/Header';
import Projects from 'src/containers/Projects';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Projects />
  </div>
);

// == Export
export default App;
