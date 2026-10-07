import DownloadButton from "./DownloadButton.jsx";
import { VERSION } from "../content.js";

export default function Closing() {
  return (
    <section className="closing wrap">
      <h2>Give your desktop a clean sweep.</h2>
      <div className="cta">
        <DownloadButton />
        <p className="fine">
          <span>Version {VERSION}</span>
          <span>macOS 13+</span>
          <span>Apple Silicon</span>
        </p>
      </div>
    </section>
  );
}
