import "./Instructors.scss";

export default function Instructors() {
  return (
      <div className="instructors container">
        <div className="col-lg-8">
          <div className="instructors-title">
            <h2 className="title title--white">{"You Will Be Taught by "}<span className="title title--violet">{"Experienced"}</span>{" Instructors"}</h2>
          </div>
        </div>
        <div className="instructors-content">
          <div className="instructors-content-list">
            <div className="col-12 col-md-5 col-lg-4">
              <div className="instructors-content-list-item">
                <div className="instructors-content-list-item-img">
                  <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/persons002.jpg" alt="" />
                </div>
                <div className="instructors-content-list-item-name">
                  <h4 className="text text--lg text--bold-white">{"Amelia Rivers"}</h4>
                </div>
                <div className="instructors-content-list-item-position">
                  <p className="text text--sm text--violet">{"AI Startup Founder"}</p>
                </div>
                <div className="instructors-content-list-item-text">
                  <p className="text text--sm text--light-white">{"Forward-thinking entrepreneur leading cutting-edge machine learning ventures. Her strategic insight helps businesses implement and scale AI solutions effortlessly."}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <div className="instructors-content-list-item">
                <div className="instructors-content-list-item-img">
                  <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/persons005.jpg" alt="" />
                </div>
                <div className="instructors-content-list-item-name">
                  <h4 className="text text--lg text--bold-white">{"Ethan Carter"}</h4>
                </div>
                <div className="instructors-content-list-item-position">
                  <p className="text text--sm text--violet">{"Senior AI Engineer"}</p>
                </div>
                <div className="instructors-content-list-item-text">
                  <p className="text text--sm text--light-white">{"Expert in designing and refining complex neural networks for real-world impact. Known for hands-on guidance, empowering teams to harness AI efficiently."}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4">
              <div className="instructors-content-list-item">
                <div className="instructors-content-list-item-img">
                  <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/persons006.jpg" alt="" />
                </div>
                <div className="instructors-content-list-item-name">
                  <h4 className="text text--lg text--bold-white">{"Sophia Lane"}</h4>
                </div>
                <div className="instructors-content-list-item-position">
                  <p className="text text--sm text--violet">{"AI Consultant"}</p>
                </div>
                <div className="instructors-content-list-item-text">
                  <p className="text text--sm text--light-white">{"Specializes in tailoring AI strategies to diverse industries, ensuring seamless integration and tangible growth. Her consultative approach fosters impactful results."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
