import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SectionOne from "./section/SectionOne.jsx";
import Navbar from "./section/navbar.jsx";
import Footer from "./section/footer.jsx";
import Sertifika from "./section/Sertifika.jsx";
import Youtube from "./section/Youtube.jsx";

import Marquee from "react-fast-marquee";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  const alertR = ()=>{
    alert("Website Daha Bitmemiş Durumdadır.\nСайт Ещё Не Завершён."
    )
  }
  useEffect(()=>{
    alertR()
  },[])
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SectionOne Marquee={Marquee} />} />
          <Route path="/sertifika" element={<Sertifika />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
