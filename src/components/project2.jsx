import TPG from "../media/TPG-preview.png";

const mainExport = () => {
  return (
    <div>
      <div
        className="hero-body columns fade dont-select m-0 pt-6"
        id="project-2"
      >
        <div className="container column is-5">
          <h4>Team Profile Generator</h4>
          <h5>
            This is a simple team builder application. The user is prompted to
            enter in team members and details about them pertaining to their job
            role. It will then generate an html file so that the user can be
            presented with a visual of the team.
          </h5>
          <a
            href="https://github.com/ParagasR/Team-profile-Generator"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
        <div className="container column is-5">
          <img src={TPG} alt="Team-profile-Generator preview" />
        </div>
      </div>
    </div>
  );
};

export default mainExport;
