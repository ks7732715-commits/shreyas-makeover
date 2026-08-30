import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  const [language, setLanguage] = useState("en");


  return (
    <>

      {/* NAVBAR */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />


      {/* HERO */}
      <Hero
        language={language}
      />


      {/* SERVICES */}
      <Services
        language={language}
      />


      {/* ABOUT */}
      <About
        language={language}
      />


      {/* BOOKING */}
      <Booking
        language={language}
      />


      {/* CONTACT */}
      <Contact
        language={language}
      />


      {/* FOOTER */}
      <Footer />

    </>
  );
}


export default App;