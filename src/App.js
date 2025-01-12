// Move all imports to the top
import React, { useEffect } from "react";
import Pages from "./components/pages/Pages";   // Ensure this path is correct
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
