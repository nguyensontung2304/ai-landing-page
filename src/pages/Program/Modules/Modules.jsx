import "./modules.scss";
const weeks=[
  {week:"01",title:"Find the right work",outcome:"Choose a useful, low-risk process to improve",topics:["Task mapping","AI readiness","Success measures"]},
  {week:"02",title:"Give AI better direction",outcome:"Write clear instructions and reusable prompt patterns",topics:["Context and constraints","Examples that guide","Prompt libraries"]},
  {week:"03",title:"Research and reason",outcome:"Move from scattered information to a checked brief",topics:["Source evaluation","Synthesis","Fact checking"]},
  {week:"04",title:"Create with consistency",outcome:"Build a reviewable workflow for recurring content",topics:["Voice and format","Drafting systems","Quality checks"]},
  {week:"05",title:"Connect the steps",outcome:"Prototype an automation with human checkpoints",topics:["Workflow mapping","No-code tools","Escalation paths"]},
  {week:"06",title:"Make it stick",outcome:"Present a working improvement and a safe rollout plan",topics:["Measure impact","Team adoption","Your next 90 days"]},
];
export default function Modules() { return <section className="page-container program-curriculum page-section"><div className="section-heading"><span className="eyebrow">The learning path</span><h2>One step at a time.</h2><p>Each week adds one practical capability to your final project. Expect a clear focus, guided practice, and a small result to carry forward.</p></div><div className="week-list">{weeks.map((item)=><article className="week-row" key={item.week}><span className="week-row__number">WEEK {item.week}</span><div className="week-row__main"><h3>{item.title}</h3><p>{item.outcome}</p><div className="week-row__topics">{item.topics.map(topic=><span key={topic}>{topic}</span>)}</div></div><span className="week-row__arrow" aria-hidden="true">↗</span></article>)}</div></section>; }
