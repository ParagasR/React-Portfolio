import WD from "../media/WD-preview.png";
import "../css/cursor.css";
const mainExport = () => {
  return (
    <div className="content m-0">
      <div className="hero-body columns dont-select m-0 pt-6" id="project-4">
        <div className="container column is-5">
          <h4>Weather Dashboard</h4>
          <h5>
            This dashboard will provide a weather forecast for a region
            specified by the user. After a region is searched, it is saved to
            the list labelled 'Search History'.
          </h5>
          <div className="columns is-justify-content-space-between">
            <a
              href="https://github.com/ParagasR/Weather-Dashboard"
              target="_blank"
              class="column"
            >
              Github Repo
            </a>
            <a
              href="https://paragasr.github.io/Weather-Dashboard/"
              target="_blank"
              class="column"
            >
              Live Webite
            </a>
          </div>
        </div>
        <div className="container column is-5">
          <img src={WD} alt="Weather-Dashboard preview" />
        </div>
      </div>
    </div>
  );
};

export default mainExport;
