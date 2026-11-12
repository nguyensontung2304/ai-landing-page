import "./footer.scss";

const footerLinks = [
  ["About", "/about"], ["Program", "/program"], ["Instructors", "/instructors"],
  ["FAQ", "/faq"], ["Contact", "/contact"], ["New & Articles", "/articles"],
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__intro">
          <a className="site-brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate("/"); }}>
            <span className="site-brand__mark">A</span>
            <span>applied<span className="site-brand__accent">/ai</span></span>
          </a>
          <p>Practical AI skills for people building what comes next.</p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          {footerLinks.map(([label, path]) => (
            <a key={path} href={path} onClick={(event) => { event.preventDefault(); onNavigate(path); }}>{label}</a>
          ))}
        </nav>
        <a className="site-footer__email" href="mailto:hello@appliedai.academy">hello@appliedai.academy</a>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Applied AI Academy</span>
        <span>Learn by doing. Build with confidence.</span>
      </div>
    </footer>
  );
}
