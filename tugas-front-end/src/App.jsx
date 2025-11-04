// src/App.jsx
import React from "react";
import Footer from "./footer/index.jsx"; 
import './App.css'
import Header from './Header/header.jsx';
import CardInfo from "./CardInfo/cardInfo.jsx";
import Home from "./Home/home.jsx";


function App() {
  return (
    <>
      <main style={{ minHeight: "20vh", padding: "20px" }}>
      </main>

      <Home />
      <CardInfo />
      <Header />
      <Footer />
    </>
  );
}

export default App;
