import Intro from "./Intro/Intro.jsx";
import Story from "./Story/Story.jsx";
import Principles from "./Principles/Principles.jsx";
import Outcomes from "./Outcomes/Outcomes.jsx";
import Teams from "./Teams/Teams.jsx";
import Journey from "./Journey/Journey.jsx";
import "./about.scss";

export default function About() {
  return <main className="page page-about"><Intro /><Story /><Principles /><Outcomes /><Teams /><Journey /></main>;
}
