import ID from "../media/ID-preview.png";

const mainExport = () => {
  return (
    <div>
      <div
        className="hero-body columns fade dont-select m-0 pt-6"
        id="project-1"
      >
        <div className="container column is-5">
          <h4>Insomniac's Dashboard</h4>
          <h5>
            This is my first collaborative work as project lead. Despite most of
            the work was done through teaching, this project was a great
            experience leading a team
          </h5>
          <h5>
            This dashboard is movie finder for horror fanatics. They can search
            for a specific movie or be presented with a list of top horror
            movies. When the user selects a movie, they are presented with a
            trailer, short description, and rating. All previously viewed movies
            are also saved under the 'Recently viewed' section.
          </h5>
          <div className="columns is-justify-content-space-between">
            <a
              href="https://github.com/ParagasR/Insomniacs-Dashboard"
              target="_blank"
              className="column"
            >
              Github Repo
            </a>
            <a
              href="https://paragasr.github.io/Insomniacs-Dashboard/"
              target="_blank"
              className="column"
            >
              Live Webite
            </a>
          </div>
        </div>
        <div className="container column is-5">
          <img src={ID} alt="Insomniacs-Dashboard preview" />
        </div>
      </div>
    </div>
  );
};

export default mainExport;
