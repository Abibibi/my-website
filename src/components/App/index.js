// == Import : npm
import React, { useEffect } from "react";

// == Import : local
import "./app.scss";
import Navbar from "src/components/Navbar";
import Header from "src/components/Header";
import Videos from "../Videos";
import Form from "src/components/Form";
import Footer from "src/components/Footer";

// == Composant
const App = () => {
  useEffect(() => {
    // to make sure the height taken into account
    // is the whole window size,
    // not the visible window size
    // (critical on mobile, where, on click on the contact form inputs,
    // the keyboard appears and takes half of the window size,
    // which shrinks the form size - unpleasant user experience)
    setTimeout(() => {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`
      );
    }, 300);
  }, []);

  return (
    <div id="app">
      <Navbar />
      <Header />
      <Videos />
      <Form />
      <Footer />
    </div>
  );
};

// == Export
export default App;
