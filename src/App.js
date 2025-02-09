import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      
      <Header />
      <MobileHeader />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
