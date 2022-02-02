import RG from "../media/RG-preview.mp4";

const mainExport = () => {
  return (
    <div>
      <div
        className="hero-body columns fade dont-select m-0 pt-6"
        id="project-3"
      >
        <div className="container column is-5">
          <h4>ReadMe Generator</h4>
          <h5>
            This is a simple readme generator application. The user is prompted
            to enter all the fields applicable to creating a clean readme. The
            video to the right will provide a quick demonstration on how to use
            the readme generator.
          </h5>
          <a
            href="https://github.com/ParagasR/Readme-Generator"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
        <div className="container column is-5">
          <iframe
            style={"width:700px;height:394px;"}
            src={RG}
            scrolling="no"
            border="0"
            frameBorder="no"
            frameSpacing="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default mainExport;
