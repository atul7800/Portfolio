import { useState } from "react";
import "./App.css";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
