import "./questionList.scss";
const questions=[
["Who is this program for?","It is designed for professionals and teams who want to apply AI to everyday business work. You do not need a technical background or prior experience with automation."],
["Do I need to know how to code?","No. The course focuses on practical workflows and accessible tools. We explain technical ideas in plain language and show where no-code options are useful."],
["How much time should I set aside?","Plan for one live session and about two hours of guided practice each week. The final project is built in small steps alongside the lessons, so you can apply what you learn as you go."],
["What tools will we use?","We introduce tool categories and current examples for research, writing, analysis, and automation. The core skills transfer across products, so you are not locked into one platform."],
["Can I use my own business project?","Yes. A real task makes the work more valuable. We will help you choose a suitable project and avoid using sensitive or confidential information in public tools."],
["Will I receive a certificate?","Learners who complete the sessions and final project receive an Applied AI Academy certificate of completion."],
["What if I miss a live session?","You will receive lesson notes and a recording, and can bring follow-up questions to the next instructor office hour."],
["How large are the learning groups?","We keep cohorts intentionally small so participants can ask questions, compare approaches, and get feedback on their project."],
["Do I need paid subscriptions to AI tools?","The examples are selected to be accessible. Some optional tools may offer paid plans; we explain alternatives and flag any requirements before you need them."],
["Can my organization enroll a team?","Yes. We can discuss a private cohort, shared business goals, and examples that fit your team. Contact us to plan the right format."],
["How do I learn about tuition and upcoming dates?","Cohort dates and tuition can vary. Send us an inquiry and we will share the current details and answer questions about fit."],
["How do you handle privacy during practice?","We recommend using public, low-risk, or anonymized examples in class. Instructors explain how to recognize sensitive data and how to check a tool’s settings before use."],
["Can I ask for accessibility support?","Yes. Let us know what would help you participate comfortably, and our team will discuss available accommodations before you enroll."],
];
export default function QuestionList() { return <section className="page-container faq-list page-section" aria-label="Frequently asked questions">{questions.map(([question,answer],index)=><details className="faq-item" key={question} open={index===0}><summary><span>{question}</span><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</section>; }
