import React from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
