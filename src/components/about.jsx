import "../css/backgroundColor.css";
import "../css/cursor.css";
const mainExport = () => {
  return (
    <div className="content m-0">
      <div className="hero-body columns m-0 pt-6" id="bio">
        <div className="container column is-5 dont-select">
          <h5>Kumusta! I'm Ryan and welcome to my portfolio.</h5>{" "}
          <h5>
            I am a student at Denver University's Fullstack Developer Bootcamp.
            I am originally from Southern California and now reside in Aurora,
            Colorado. I currently work at UCHealth as a Virtual Health
            Technician, which includes developing the Diabetes Home Remote Care
            program.
          </h5>{" "}
          <h5>
            I take pride in my skills as a leader, team member, ingenuity, and
            my passion to continue to grow my coding skillset. Through self
            learning, I have been independently coding for 8+ years. In addition
            to my DU Fullstack course load, I am currently teaching myself
            Kotlin.
          </h5>
        </div>
        <div className="container column is-5">
          <img />
        </div>
      </div>
    </div>
  );
};

export default mainExport;
