import { RELEASES_URL } from "../content.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>Vacuum by Aditya Dave</span>
        <a href={RELEASES_URL}>Release notes</a>
      </div>
    </footer>
  );
}
