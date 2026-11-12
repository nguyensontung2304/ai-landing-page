import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/core/reset.css";
import "./styles/core/grid.css";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Instructors from "./pages/Instructors/Instructors.jsx";
import Program from "./pages/Program/Program.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NewArticles from "./pages/NewArticles/NewArticles.jsx";
import "./styles/global.scss";

const pages = {
  "/": Home,
  "/about": About,
  "/instructors": Instructors,
  "/program": Program,
  "/faq": FAQ,
  "/contact": Contact,
  "/articles": NewArticles,
};

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const Page = pages[path] || Home;

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    const titles = {
      "/": "Applied AI Academy | Make AI useful for the work that matters",
      "/about": "About | Applied AI Academy",
      "/instructors": "Instructors | Applied AI Academy",
      "/program": "Program | Applied AI Academy",
      "/faq": "FAQ | Applied AI Academy",
      "/contact": "Contact | Applied AI Academy",
      "/articles": "New & Articles | Applied AI Academy",
    };
    document.title = titles[path] || titles["/"];

    const list = document.querySelector(".curriculum-list");
    const updateFade = () => {
      if (!list) return;
      list.classList.remove("fade-top", "fade-bottom", "fade-both");
      if (list.scrollTop === 0) list.classList.add("fade-bottom");
      else if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1)
        list.classList.add("fade-top");
      else list.classList.add("fade-both");
    };
    list?.addEventListener("scroll", updateFade);
    updateFade();

    const slider = window.jQuery?.(".stories-content-viewport-track");
    if (slider?.length && !slider.hasClass("slick-initialized")) {
      slider.slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        dots: true,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 1, centerMode: false } },
        ],
      });
    }

    return () => {
      list?.removeEventListener("scroll", updateFade);
      if (slider?.hasClass("slick-initialized")) slider.slick("unslick");
    };
  }, [path]);

  return (
    <>
      <Header onNavigate={navigate} />
      <Page />
      <Footer onNavigate={navigate} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
