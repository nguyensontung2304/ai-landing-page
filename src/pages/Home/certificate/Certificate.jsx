import "./Certificate.scss";

export default function Certificate() {
  return (
      <div className="certificate container">
        <div className="certificate-content">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="certificate-content-title">
              <h3 className="title title--white"><span className="title title--violet">{"Certificate"}</span>{" of Completion"}</h3>
              <p className="text text--md text--light-white ">{"After completing the course and the final test, you will receive a certificate that will certify that you have acquired thorough knowledge and skills in the use of artificial intelligence in the automation of business processes."}</p>
            </div>
          </div>
          <div className="col-8 col-md-8 col-lg-6">
            <div className="certificate-content-img">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/Certificate-2.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="certificate-list">
          <div className="col-12 col-md-5 col-lg-3">
            <div className="certificate-list-item">
              <div className="frame"><i className="fa-solid fa-user-check certificate-icon"></i></div>
              <div className="text text--md text--bold-white">
                <h4>{"Official Certification"}</h4>
              </div>
              <div className="text text--sm text--light-white">
                <p>{"Receive a recognized diploma verifying your AI proficiency"}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="certificate-list-item">
              <div className="frame"><i className="fa-solid fa-brain certificate-icon"></i></div>
              <div className="text text--md text--bold-white">
                <h4>{"Career Advancement"}</h4>
              </div>
              <div className="text text--sm text--light-white">
                <p>{"Enhance your resume and stand out to employers"}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="certificate-list-item">
              <div className="frame"><i className="fa-solid fa-user-check certificate-icon"></i></div>
              <div className="text text--md text--bold-white">
                <h4>{"Professional Credibility"}</h4>
              </div>
              <div className="text text--sm text--light-white">
                <p>{"Demonstrate your commitment to continuous learning"}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="certificate-list-item">
              <div className="frame"><i className="fa-solid fa-rocket certificate-icon"></i></div>
              <div className="text text--md text--bold-white">
                <h4>{"Networking Opportunities"}</h4>
              </div>
              <div className="text text--sm text--light-white">
                <p>{"Receive a recognized diploma verifying your AI proficiency "}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
