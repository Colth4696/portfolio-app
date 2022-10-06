import React from 'react';
import "./App.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return(
    <div className="wrap">
    <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    </div>
  );
}
