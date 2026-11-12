import "./outcomes.scss";
const outcomes = ["A repeatable workflow for a task you actually own", "A clear review process for accuracy, privacy, and tone", "A practical plan to bring your team along", "Confidence to keep adapting as tools change"];
export default function Outcomes() {
  return <section className="page-container about-outcome page-section"><div><span className="eyebrow">The outcome</span><h2 className="section-title">Leave with a new habit,<br />not just a new account.</h2><p className="section-copy">Every learner finishes with a practical next step they can take back into their work.</p></div><div className="about-outcome__list">{outcomes.map((item,index)=><p key={item}><b>{String(index+1).padStart(2,"0")}</b>{item}</p>)}</div></section>;
}
