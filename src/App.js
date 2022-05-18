import React from "react";
import Hero from "./Components/hero/Hero";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import "./App.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
