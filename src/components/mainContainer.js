import React, { useState } from "react";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";
import Header from "./header";
import Footer from "./footer";
import Banner from "./mainBanner";

export default function mainContainter() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "Projects") {
      return <Projects />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else {
      return <About />;
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
