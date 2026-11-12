import "./Skills.scss";

export default function Skills() {
  return (
      <div className="skills container">
        <div className="col-12 col-md-12 col-lg-4">
          <div className="skills-banner">
            <img src="https://png.pngtree.com/png-clipart/20250430/original/pngtree-vr-headset-glowing-with-neon-lights-in-futuristic-design-png-image_19854165.png" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-8">
          <div className="skills-wrapper">
            <div className="skills-wrapper-title">
              <h2>{"What Skills You'll Gain"}</h2>
            </div>
            <div className="skills-wrapper-content">
              <div className="skills-wrapper-content-item">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="skills-wrapper-content-item-subtitle">
                    <i className="fa-solid fa-brain skills-icon"></i>
                    <p>{"Comprehensive Understanding of AI"}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="skills-wrapper-content-item-text">
                    <p>{"Grasp the fundamentals of AI and how it applies to various business functions."}</p>
                  </div>
                </div>
              </div>
              <div className="skills-wrapper-content-item">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="skills-wrapper-content-item-subtitle">
                    <i className="fa-brands fa-airbnb skills-icon"></i>
                    <p>{"Enhanced Efficiency"}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="skills-wrapper-content-item-text">
                    <p>{"Learn how to automate routine tasks, allowing your team to focus on strategic initiatives."}</p>
                  </div>
                </div>
              </div>
              <div className="skills-wrapper-content-item">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="skills-wrapper-content-item-subtitle">
                    <i className="fa-solid fa-user-check skills-icon"></i>
                    <p className="col-10">{"Improved Customer Engagement"}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="skills-wrapper-content-item-text">
                    <p>{"Utilize AI technologies to provide personalized customer experiences and support."}</p>
                  </div>
                </div>
              </div>
              <div className="skills-wrapper-content-item">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="skills-wrapper-content-item-subtitle">
                    <i className="fa-solid fa-rocket skills-icon"></i>
                    <p className="highlight">{"Competitive Edge"}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="skills-wrapper-content-item-text">
                    <p>{"Stay ahead of industry trends by adopting cutting-edge AI technologies."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
