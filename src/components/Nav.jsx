import DownloadButton from "./DownloadButton.jsx";

const links = [
  ["#how", "How it works"],
  ["#install", "Install"],
  ["#privacy", "Privacy"],
  ["#faq", "FAQ"],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">
          <img src="images/icon.png" alt="" />
          Vacuum
        </a>
        <nav className="links" aria-label="Sections">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <DownloadButton small>Download</DownloadButton>
      </div>
    </header>
  );
}
