import Banner from "./banner/Banner.jsx";
import CallToAction from "./call-to-action/CallToAction.jsx";
import Productivity from "./productivity/Productivity.jsx";
import CourseHighlights from "./course-highlights/CourseHighlights.jsx";
import Skills from "./skills/Skills.jsx";
import TargetAudience from "./target-audience/TargetAudience.jsx";
import Instructors from "./instructors/Instructors.jsx";
import SuccessStories from "./success-stories/SuccessStories.jsx";
import LearningOutcomes from "./learning-outcomes/LearningOutcomes.jsx";
import Curriculum from "./curriculum/Curriculum.jsx";
import Certificate from "./certificate/Certificate.jsx";
import Pricing from "./pricing/Pricing.jsx";
import Questions from "./questions/Questions.jsx";
import ContactSection from "./contact/Contact.jsx";
import "./home.scss";

export default function Home() {
  return (
    <main className="page page-home">
      <Banner />
      <CallToAction />
      <Productivity />
      <CourseHighlights />
      <Skills />
      <TargetAudience />
      <Instructors />
      <SuccessStories />
      <LearningOutcomes />
      <Curriculum />
      <Certificate />
      <Pricing />
      <Questions />
      <ContactSection />
    </main>
  );
}
