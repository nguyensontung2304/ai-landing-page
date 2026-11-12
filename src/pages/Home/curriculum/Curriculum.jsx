import "./Curriculum.scss";

export default function Curriculum() {
  return (
      <div className="curriculum container">
        <div className="col-12 col-md-12 col-lg-6">
          <div className="curriculum-list fade-bottom">
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"1."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{" What is Generative Artificial Intelligence?"}</h3>
                <p className="text text--sm text--light-white">{"Introduction. Core fundamentals of AI technology."}</p>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"2."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"AI-Based Services"}</h3>
                <ul className="text text--sm text--light-white">
                  <li>{"Explore robust AI-based solutions"}</li>
                  <li>{"Leverage advanced machine intelligence"}</li>
                  <li>{"Enhance daily operations with AI analytics"}</li>
                  <li>{"Implement synergy within teams for smooth results"}</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"3."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"Writing Prompts for GPT Models"}</h3>
                <ul className="text text--sm text--light-white">
                  <li>{"Refine text with context"}</li>
                  <li>{"Provide structured detail to steer content"}</li>
                  <li>{"Focus clarity on desired outcomes"}</li>
                </ul>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"4."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"Writing Prompts for GPT Models"}</h3>
                <ul className="text text--sm text--light-white">
                  <li>{"Tailor prompts for variety"}</li>
                  <li>{"Develop queries that spark unique responses"}</li>
                  <li>{"Refine approach to target goals"}</li>
                  <p>{"Practical part: "}<span className="text text--sm text--violet">{"Create your own specialized prompt"}</span></p>
                </ul>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"5."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"Writing Prompts for Generating Images in Midjourney"}</h3>
                <ul className="text text--sm text--light-white">
                  <li>{"Shape visuals swiftly"}</li>
                  <li>{"Add clarity through details"}</li>
                  <li>{"Maximize style with precise cues daily"}</li>
                  <li>{"Combine color and theme skillfully"}</li>
                  <p>{"Practical part: "}<span className="text text--sm text--violet">{"Draft a custom Midjourney prompt"}</span></p>
                </ul>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"6."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"Writing Prompts in Stable Diffusion"}</h3>
                <ul className="text text--sm text--light-white">
                  <li>{"Refine composition through precise guided steps"}</li>
                  <li>{"Elevate artistry effortlessly"}</li>
                  <li>{"Employ targeted keywords for clarit"}</li>
                  <p>{"Practical part: "}<span className="text text--sm text--violet">{"Construct your Stable Diffusion prompt"}</span></p>
                </ul>
              </div>
            </div>
            <div className="curriculum-list-item">
              <div className="curriculum-list-item-order">
                <h2>{"7."}</h2>
              </div>
              <div className="curriculum-list-item-content">
                <h3 className="text text--lg text--bold-white">{"Certification"}</h3>
                <p className="text text--sm text--light-white">{"Take the final test and secure your certificate!"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <div className="curriculum-introduce">
            <div className="curriculum-introduce-title">
              <h2 className="title title--white">{"Course "}<span className="title title--violet">{"Curriculum"}</span></h2>
            </div>
            <div className="curriculum-introduce-meta">
              <div className="curriculum-introduce-meta-item">
                <i className="fa-solid fa-calendar-week curriculum-introduce-meta-item-icon"></i>
                <p className="text text--sm text--light-white">{"3 Weeks"}</p>
              </div>
              <div className="curriculum-introduce-meta-item">
                <i className="fa-regular fa-circle-play curriculum-introduce-meta-item-icon"></i>
                <p className="text text--sm text--light-white">{"6 Online Lessons"}</p>
              </div>
              <div className="curriculum-introduce-meta-item">
                <i className="fa-solid fa-award curriculum-introduce-meta-item-icon"></i>
                <p className="text text--sm text--light-white">{"Certificate of Completion"}</p>
              </div>
            </div>
            <div className="curriculum-introduce-text">
              <p className="text text--md text--light-white">{"We have created a course program for the current needs of everyone who is interested in using artificial intelligence in marketing processes."}</p>
            </div>
            <div className="curriculum-introduce-text">
              <p className="text text--md text--light-white">{"You will have 3 intensive weeks of training and practice with the support of experienced specialists"}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
