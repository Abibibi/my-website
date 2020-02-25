// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Header from 'src/components/Header';
import Border from 'src/components/Border';
import Projects from 'src/containers/Projects';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Header />
    {/* <Border /> */}
    <Projects />
    {/* <Border /> */}
    <Footer />
  </div>
);

// == Export
export default App;
