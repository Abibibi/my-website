// == Import : npm
import React, { useEffect } from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/components/Navbar';
import Header from 'src/components/Header';
import Projects from 'src/components/Projects';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';

// == Composant
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`);
    }, 300);
  }, []);

  return (
    <div id="app">
      <Navbar />
      <Header />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
};

// == Export
export default App;
