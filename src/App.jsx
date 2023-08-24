import { useState } from "react";
import "./App.css";
import Navbar from "./Compnents/Navbar/Navbar";
import Home from "./Compnents/Home/Home";
import Services from "./Compnents/Services/services";
import Contact from "./Compnents/Contact/Contact";
import Portfolio from "./Compnents/Portfolio/Porfolio";
import Footer from "./Compnents/footer/footer";

function App() {

  return (
    <div style={{backgroundColor:'#1e2125'}}>
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
