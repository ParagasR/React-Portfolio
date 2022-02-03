import "../css/cursor.css";

const mainExport = () => {
  return (
    <div>
      <div
        className="hero-body columns dont-select m-0 pt-6"
        id="contact-content"
      >
        <div className="container column is-5 has-text-centered">
          <h2>Contact Me</h2>
        </div>
        <div className="container column is-5">
          <ul>
            <li className="mb-6">
              <h3>
                <a href="https://www.linkedin.com/in/paragasr/" target="_blank">
                  LinkedIn
                </a>
              </h3>
            </li>
            <li className="my-6">
              <h3>
                <a href="mailto:r.paragas@outlook.com" target="_blank">
                  r.paragas@outlook.com
                </a>
              </h3>
            </li>
            <li className="mt-6">
              <h3>(720) 750-2417</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default mainExport;
