// src/App.jsx
import React from "react";
import Footer from "./footer/index.jsx"; 
import './App.css'
import Header from './Header/header.jsx';
import CardInfo from "./CardInfo/cardInfo.jsx";


function App() {
  return (
    <>
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <h1>Selamat Datang di Website UNKLAB</h1>
        <p>Ini adalah halaman utama aplikasi kamu.</p>
      </main>

      <CardInfo />
      <Header />
      <Footer />
    </>
  );
}

export default App;
