// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Header from 'src/components/Header';
import Projects from 'src/components/Projects';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Header />
    <Projects />
    <Form />
    <Footer />
  </div>
);

// == Export
export default App;
