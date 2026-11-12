import "./Banner.scss";

export default function Banner() {
  return (
      <div className="banner-background">
        <div className="banner container">
          <div className="col-12 col-md-12 col-lg-9">
            <div className="banner-content">
              <h1 className="banner-content-title">{" Boost Your Business Productivity with AI Technologies "}</h1>
              <div className="banner-content-bottom">
                <div className="col-12 col-md-8 col-lg-4">
                  <button className="btn btn--lg btn--gradient">{" Become AI Expert "}</button>
                </div>
                <div className="col-12 col-md-12 col-lg-7">
                  <p className="text text--lg text--light-white">{" Stay ahead of industry trends by adopting cutting-edge AI technologies. "}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="banner-img">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/art-floating-min-2-.webp" alt="" />
            </div>
          </div>
          <div className="banner-feature row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="banner-feature-item">
                <div className="frame"><i className="fa-solid fa-brain banner-icon"></i></div>
                <div className="col-lg-8">
                  <p className="banner-feature-item-text">{" Master the fundamentals of AI tools usage "}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="banner-feature-item">
                <div className="frame"><i className="fa-solid fa-code-branch banner-icon"></i></div>
                <div className="col-lg-8">
                  <p className="banner-feature-item-text">{" Integrate AI technologies into your business "}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="banner-feature-item">
                <div className="frame"><i className="fa-solid fa-rocket banner-icon"></i></div>
                <div className="col-lg-8">
                  <p className="banner-feature-item-text">{" Automate routine tasks "}{"&"}{" enhance productivity "}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
