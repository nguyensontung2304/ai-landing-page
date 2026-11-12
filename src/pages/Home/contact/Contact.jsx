import "./Contact.scss";

export default function Contact() {
  return (
      <div className="contact container">
        <div className="col-12 col-md-12 col-lg-7">
          <div className="contact-content">
            <div className="contact-content-title">
              <h2 className="title title--white">{"Have Additional Questions?"}</h2>
            </div>
            <div className="contact-content-text">
              <p className="text text--md text--light-white">{"Get in touch! Our team of support specialists are available to speak with you about our program."}</p>
            </div>
            <div className="contact-content-info">
              <div className="col-12 col-md-5 col-lg-5">
                <div className="contact-content-info-phone">
                  <i className="fa-solid fa-phone contact-icon"></i>
                  <p>{"1-800-123-4567"}</p>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5">
                <div className="contact-content-info-email">
                  <i className="fa-regular fa-envelope contact-icon"></i>
                  <p className="text text--sm text--bold-white">{"support@yourcourse.com"}</p>
                </div>
              </div>
            </div>
            <div className="contact-content-form">
              <input className="col-12 col-md-7 col-lg-7" type="text" placeholder="Enter Your Phone Number" />
              <div className="col-12 col-md-7 col-lg-7">
                <button className="btn btn--md btn--gradient">{"Request Callback"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-lg-5">
          <div className="contact-img">
            <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/square990.jpg" alt="" />
          </div>
        </div>
      </div>
  );
}
