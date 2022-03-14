import "../css/header.css";

const mainExport = ({ currentPage, handlePage }) => {
  const pageHandler = (e) => {
    const t = e.target.getAttribute("id");
    switch (t) {
      case "resume":
        handlePage("Resume");
        break;
      case "contact":
        handlePage("Contact");
        break;
      case "projects":
        handlePage("Portfolio");
        break;
      default:
        handlePage("About");
    }
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbar" className="navbar-menu mx-3">
          <div className="navbar-start">
            <a className="navbar-item page" id="about" onClick={pageHandler}>
              Ryan Paragas
            </a>

            <a className="navbar-item page" id="resume" onClick={pageHandler}>
              Resume
            </a>
              <a className="navbar-link" id="projects" onClick={pageHandler}>
                Projects
                </a>
          </div>

          <div className="navbar-end">
            <a
              className="navbar-item"
              id="github"
              href="https://github.com/ParagasR"
              target="_blank"
            >
              Github
            </a>

            <a className="navbar-item page" id="contact" onClick={pageHandler}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default mainExport;
