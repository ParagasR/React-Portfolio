import "../css/header.css";

const mainExport = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbar" className="navbar-menu mx-3">
          <div className="navbar-start">
            <a className="navbar-item page" id="home">
              Ryan
            </a>

            <a className="navbar-item page" id="resume">
              Resume
            </a>

            <div className="navbar-item is-hoverable">
              <a className="navbar-link">Projects</a>
              <div className="navbar-dropdown">
                <a className="navbar-item page" id="option-1">
                  Insomniac's Dashboard
                </a>
                <a className="navbar-item page" id="option-2">
                  Team Profile Generator
                </a>
                <a className="navbar-item page" id="option-3">
                  Readme Generator
                </a>
                <a className="navbar-item page" id="option-4">
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

            <a className="navbar-item page" id="contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default mainExport;
