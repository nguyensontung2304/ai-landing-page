import "./CallToAction.scss";

export default function CallToAction() {
  return (
      <div className="cta container">
        <div className="col-md-12 col-lg-4">
          <div className="cta-img">
            <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/square001.jpg" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-8">
          <div className="cta-content">
            <div className="cta-content-meta">
              <div className="cta-content-meta-item">
                <i className="fa-solid fa-calendar-week cta-content-meta-item-icon"></i>
                <p>{"2 Weeks"}</p>
              </div>
              <div className="cta-content-meta-item">
                <i className="fa-solid fa-chalkboard cta-content-meta-item-icon"></i>
                <p>{"6 Online Lessons"}</p>
              </div>
              <div className="cta-content-meta-item">
                <i className="fa-solid fa-certificate cta-content-meta-item-icon"></i>
                <p>{"Certificate of Completion"}</p>
              </div>
            </div>
            <div className="cta-content-title">
              <p>{"Are You Ready to Boost Your Productivity with AI?"}</p>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="cta-content-btn">
                <button className="btn--md btn--light">{"Course Program"}</button>
                <button className="btn btn--md btn--gradient">{"Enroll Now"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
