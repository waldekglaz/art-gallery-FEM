import React from "react";
import Hero from "./Components/hero/Hero";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
      <Footer logo={logo} theme="dark" />
    </div>
  );
}

export default App;
