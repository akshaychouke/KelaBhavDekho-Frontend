import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/contactPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
      {/* <ContactPage /> */}
    </>
  );
}

export default App;
