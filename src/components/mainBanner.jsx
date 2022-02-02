import "../css/banner.css";
import CherryBlossoms from "../media/PngItem_1389353.png";

const mainExport = () => {
  return (
    <div>
      <section className="hero is-small" id="banner">
        <div className="hero-body columns pt-6 pb-0">
          <div className="column is-one-quarter ml-6 mt-5 pb-0">
            <h2 className="title has-text-left my-5 fade" id="fade-1">
              Nothing’s perfect
            </h2>
            <h3 className="subtitle has-text-right my-5 fade" id="fade-1">
              the world's not perfect
            </h3>
            <h2 className="title has-text-left my-5 fade" id="fade-2">
              but it’s there for us
            </h2>
            <h3 className="subtitle has-text-right my-5 fade" id="fade-2">
              trying the best it can
            </h3>
            <h1 className="title has-text-centered mt-3 fade" id="fade-3">
              That’s what makes it so damn beautiful
            </h1>
            <h1 className="title has-text-centered mt-3 fade" id="fade-4">
              - Roy Mustang
            </h1>
          </div>

          <div className="column pt-0" id="img-box">
            <img id="cherry-blossom" src={CherryBlossoms} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default mainExport;
