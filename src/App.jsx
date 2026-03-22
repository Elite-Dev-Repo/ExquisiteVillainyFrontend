import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Image from "./components/Image";
import Whatitis from "./components/Whatitis";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <About />
      <Image />
      <Whatitis />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
