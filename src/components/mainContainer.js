import React, { useState } from "react";
import About from "./about";
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';
import Contact from "./contact";
import Resume from "./resume";
import Header from "./header";
import Footer from "./footer";
import Banner from "./mainBanner";

export default function mainContainter() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Project1":
        return <Project1 />
      case "Project2":
        return <Project2 />
      case "Project3":
        return <Project3 />
      case "Project4":
        return <Project4 />
      case "Contact":
        return <Contact />
      case "Resume":
        return <Resume />
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
