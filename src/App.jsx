// State and context hooks from React.
import React from "react";
import { useState, useEffect } from "react";

// Components for website displaying.
import Scrollbar from "./Components/Scrollbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

function App() {
  const [open, setOpen] = useState(false);

  const menuController = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <React.Fragment>
      <Scrollbar />
      {/* <Header open={open} menuController={menuController} /> */}
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
}

export default App;
