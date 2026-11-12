import "./Questions.scss";

export default function Questions() {
  return (
      <div className="questions container">
        <div className="questions-title">
          <h2 className="title title--white">{"Frequently Asked "}<span className="title title--violet">{"Questions"}</span></h2>
        </div>
        <div className="questions-content">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="questions-content-item-1">
              <i className="fa-solid fa-question questions-icon"></i>
              <p className="text text--md text--bold-white">{"Is this course suitable for beginners?"}</p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-9">
            <div className="questions-content-item">
              <i className="fa-solid fa-question questions-icon"></i>
              <p className="text text--md text--bold-white">{"How long is the course?"}</p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-9">
            <div className="questions-content-item">
              <i className="fa-solid fa-question questions-icon"></i>
              <p className="text text--md text--bold-white">{"Will I receive a certificate upon completion?"}</p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-9">
            <div className="questions-content-item">
              <i className="fa-solid fa-question questions-icon"></i>
              <p className="text text--md text--bold-white">{"What if I have questions during the course?"}</p>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-9">
            <div className="questions-content-item-2">
              <i className="fa-solid fa-question questions-icon"></i>
              <p className="text text--md text--bold-white">{"If the course doesn't suit me, can I get a refund?"}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
