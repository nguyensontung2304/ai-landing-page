import "./principles.scss";
const values = [
  ["01", "Work before technology", "We begin with a meaningful business task, then choose the simplest AI approach that can improve it."],
  ["02", "Practice over presentation", "Short explanations lead into guided experiments, peer feedback, and a finished workflow you can explain."],
  ["03", "People stay accountable", "AI can draft and accelerate. You learn to review outputs, protect information, and own the decision."],
];
export default function Principles() {
  return <section className="about-principles page-section"><div className="page-container"><span className="eyebrow">How we teach</span><h2 className="section-title">Useful by design.</h2><p className="section-copy">Our learning experience is built to be clear, supportive, and grounded in the details of real work.</p><div className="about-principles__grid">{values.map(([number,title,text]) => <article className="surface about-principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
