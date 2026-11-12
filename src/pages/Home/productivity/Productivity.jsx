import "./Productivity.scss";

export default function Productivity() {
  return (
      <div className="productivity container">
        <div className="col-12 col-md-12 col-lg-7">
          <div className="productivity-content">
            <div className="productivity-content-subtitle">
              <p>{"Comprehensive Online Course"}</p>
            </div>
            <div className="title title--white">
              <h2>{"\"AI Technologies for Business Productivity\""}</h2>
            </div>
            <div className="text text--md text--light-white">
              <p>{"In today’s competitive landscape, leveraging technology isn’t just an advantage — it’s a necessity."}</p>
            </div>
            <div className="text text--md text--light-white">
              <p>{"Our online course equips you with the knowledge and tools to integrate AI into your business seamlessly."}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-10">
              <button className="btn btn--md btn--gradient">{"Meet Your Instructors"}</button>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-lg-5">
          <div className="productivity-img">
            <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/square202.jpg" alt="" />
          </div>
        </div>
      </div>
  );
}
