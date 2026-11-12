import "./journey.scss";
const steps = [["01","Explore","Notice where time and attention are going in your work."],["02","Experiment","Try a focused AI workflow with guidance and useful guardrails."],["03","Evaluate","Review the result, gather feedback, and measure what improved."],["04","Apply","Leave with a clear next step for yourself or your team."]];
export default function Journey() {
  return <section className="page-container about-steps page-section"><span className="eyebrow">The learning experience</span><h2 className="section-title">Supported from first question to final project.</h2><p className="section-copy">You will have a clear route through the material, with enough space to ask questions and adapt the practice to your own context.</p><div className="about-steps__row">{steps.map(([number,title,text])=><article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
