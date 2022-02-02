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
      case "project-1":
        handlePage("Project1");
        break;
      case "project-2":
        handlePage("Project2");
        break;
      case "project-3":
        handlePage("Project3");
        break;
      case "project-4":
        handlePage("Project4");
        break;
      default:
        handlePage("About");
    }
  };

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbar" className="navbar-menu mx-3">
          <div className="navbar-start">
            <a className="navbar-item page" id="about" onClick={pageHandler}>
              Ryan
            </a>

            <a className="navbar-item page" id="resume" onClick={pageHandler}>
              Resume
            </a>

            <div className="navbar-item is-hoverable">
              <a className="navbar-link">Projects</a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item page"
                  id="project-1"
                  onClick={pageHandler}
                >
                  Insomniac's Dashboard
                </a>
                <a
                  className="navbar-item page"
                  id="project-2"
                  onClick={pageHandler}
                >
                  Team Profile Generator
                </a>
                <a
                  className="navbar-item page"
                  id="project-3"
                  onClick={pageHandler}
                >
                  Readme Generator
                </a>
                <a
                  className="navbar-item page"
                  id="project-4"
                  onClick={pageHandler}
                >
                  Weather Dashboard
                </a>
              </div>
            </div>
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

            <a className="navbar-item page" id="contact" onClick={handlePage}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default mainExport;
