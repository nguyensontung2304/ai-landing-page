import { useState } from "react";
import "./header.scss";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Instructors", "/instructors"],
  ["Program", "/program"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
  ["New & Articles", "/articles"],
];

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (event, path) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="/" onClick={(event) => navigate(event, "/")}>
          <span className="site-brand__mark">A</span>
          <span>applied<span className="site-brand__accent">/ai</span></span>
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {links.map(([label, path]) => (
            <a key={path} href={path} onClick={(event) => navigate(event, path)}>
              {label}
            </a>
          ))}
          <a className="site-nav__mobile-cta" href="/program" onClick={(event) => navigate(event, "/program")}>
            Explore the program <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="button button--small site-header__cta" href="/program" onClick={(event) => navigate(event, "/program")}>
          Explore the program <span aria-hidden="true">↗</span>
        </a>
      </div>
      {menuOpen && <button className="site-header__backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
