import "./TargetAudience.scss";

export default function TargetAudience() {
  return (
      <div className="target container">
        <div className="col-lg-7">
          <div className="target-title">
            <h2 className="title title--white">{"This Course is "}<span className="title title--violet">{"Definitely for You"}</span>{" if You"}</h2>
          </div>
        </div>
        <div className="target-content">
          <div className="target-content-list">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-brain target-icon"></i></div>
                <div className="target-content-list-item-text text text--md text--bold-white">
                  <p>{"Have an interest in AI technology but don’t know where to start"}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-flag target-icon"></i></div>
                <div className="target-content-list-item-text text text text--md text--bold-white">
                  <p>{"Want to stay ahead in your career by learning cutting-edge technology"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="target-content-list">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-stairs target-icon"></i></div>
                <div className="target-content-list-item-text text text text--md text--bold-white">
                  <p>{"Are a business owner aiming to enhance productivity"}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-traffic-light target-icon"></i></div>
                <div className="target-content-list-item-text text text text--md text--bold-white">
                  <p>{"Work in a sector that could benefit from AI integration"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="target-content-list">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-code-branch target-icon"></i></div>
                <div className="target-content-list-item-text text text text--md text--bold-white">
                  <p>{"Are looking to automate routine tasks to focus on strategic initiatives"}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="target-content-list-item">
                <div className="frame"><i className="fa-solid fa-user-check target-icon"></i></div>
                <div className="target-content-list-item-text text text text--md text--bold-white">
                  <p>{"Seek to improve customer engagement and satisfaction"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
