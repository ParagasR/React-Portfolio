import React, { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Portfolio from './portfolio'
import Header from "./header";
import Footer from "./footer";
import Banner from "./mainBanner";

export default function mainContainter() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />
      case "Portfolio":
        return <Portfolio/>
      default:
        return <About />
    }
  };

  const handlePage = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePage={handlePage} />
      <Banner />
      {renderPage()}
      <Footer />
    </div>
  );
}
