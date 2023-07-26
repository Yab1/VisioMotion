// State and context hooks from React.
import { useEffect } from "react";

// Components for website displaying.
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
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
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
