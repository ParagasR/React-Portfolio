const mainExport = () => {
  return (
    <div className="content m-0">
      <div
        className="hero-body dont-select m-0 columns is-flex-direction-column pt-6"
        id="resume-content"
      >
        <h5 className="column">
          Download a copy of my{" "}
          <a href="assets/files/Resume.pdf" target="_blank">
            resume
          </a>
        </h5>
        <div className="columns column">
          <div className="container column is-5">
            <h3>Experience:</h3>
            <h5 className="mb-0 pb-0">UCHealth</h5>
            <h5 className="mt-1 pt-0">
              Virtual Health Technician | 2020 - Present
            </h5>
            <h5 className="mb-6">
              {" "}
              Worked in a Virtual Health Center doing different jobs such as
              cardiac monitoring, patient safety monitoring, clerking the
              Virtual Urgent Care, and participating in the development in the
              DHRC program.
            </h5>
            <h5 className="mb-0 pb-0">Amtote International</h5>
            <h5 className="mt-1 pt-0">Service Technician | 2017 - 2019</h5>
            <h5 className="mb-3">
              Worked in various locations ensuring that ticket machines were
              maintained, product was stocked, and served as a technical
              consultant on environmental policies to maintain regulatory
              compliance.
            </h5>
          </div>
          <div className="container column is-5">
            <h3>Skills:</h3>
            <ul>
              <li>
                <h5>Languages: HTML, Javascript, CSS</h5>
              </li>
              <li>
                <h5>NPM Libraries: Express, Jest, Inquirer</h5>
              </li>
              <li>
                <h5>Other Technologies: Node Js, Bulma IO, Bootstrap</h5>
              </li>
            </ul>

            <h3>Education:</h3>
            <ul>
              <li>
                <h5 className="mb-1 pb-1">
                  Denver University | Denver, Co | 2021-2022
                </h5>
                <h5 className="mt-1 pt-1">
                  Full Stack Developer Certification
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainExport;
