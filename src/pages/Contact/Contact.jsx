import Intro from "./Intro/Intro.jsx";
import Details from "./Details/Details.jsx";
import NextSteps from "./NextSteps/NextSteps.jsx";
import InquiryForm from "./InquiryForm/InquiryForm.jsx";
import "./contact.scss";
export default function Contact() { return <main className="page page-contact"><Intro /><section className="page-container contact-layout page-section"><div className="contact-layout__side"><Details /><NextSteps /></div><InquiryForm /></section></main>; }
