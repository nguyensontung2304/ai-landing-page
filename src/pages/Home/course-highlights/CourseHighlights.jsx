import "./CourseHighlights.scss";

export default function CourseHighlights() {
  return (
      <div className="course container">
        <div className="course-title">
          <h2 className="title title--white">{"Course"}</h2>
          <h3 className="title title--violet">{"Highlights"}</h3>
        </div>
        <div className="course-content">
          <div className="col-12 col-md-5 col-lg-3">
            <div className="course-content-item">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/highlights000.jpg" alt="" />
              <h4 className="text text--lg text--bold-white">{"Interactive Learning"}</h4>
              <p className="text text--sm text--light-white">{"Engage in hands-on projects and live Q"}{"&"}{"A sessions."}</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="course-content-item">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/highlights003.jpg" alt="" />
              <h4 className="text text--lg text--bold-white">{"Expert-Led Sessions"}</h4>
              <p className="text text--sm text--light-white">{"Learn from industry professionals with real-world AI experience."}</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="course-content-item">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/highlights005-1.jpg" alt="" />
              <h4 className="text text--lg text--bold-white">{"Flexible Schedule​"}</h4>
              <p className="text text--sm text--light-white">{"Access course materials anytime, anywhere, to fit your busy lifestyle."}</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <div className="course-content-item">
              <img src="https://the7.io/elementor-ai/wp-content/uploads/sites/132/2025/01/highlights001.jpg" alt="" />
              <h4 className="text text--lg text--bold-white">{"Community Support"}</h4>
              <p className="text text--sm text--light-white">{"Join a network of like-minded professionals and collaborate on ideas."}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
