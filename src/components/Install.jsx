import CopyCommand from "./CopyCommand.jsx";
import { UNQUARANTINE } from "../content.js";

export default function Install() {
  return (
    <section id="install" className="wrap">
      <p className="eyebrow">Install</p>
      <h2>Up and running in a minute.</h2>
      <p className="intro">
        Vacuum is not notarized by Apple yet, so macOS asks you to confirm it the first time. Here is the whole
        process.
      </p>
      <ol className="install">
        <li>
          <div>
            <h3>Download Vacuum.zip</h3>
            <p>Use the download button on this page. Safari unzips it for you; with other browsers, double-click the zip in Downloads.</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Move it to Applications</h3>
            <p>Drag <strong>Vacuum</strong> into your Applications folder. This is also needed if you want it to open at login.</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Open it once and allow it</h3>
            <p>
              The first time, macOS says Apple could not verify Vacuum. Click <strong>Done</strong>, then open{" "}
              <strong>System Settings → Privacy &amp; Security</strong>, scroll down to the message about Vacuum and click{" "}
              <strong>Open Anyway</strong>.
            </p>
            <p>If you prefer Terminal, this removes the download flag instead:</p>
            <CopyCommand command={UNQUARANTINE} />
          </div>
        </li>
        <li>
          <div>
            <h3>Allow the two permissions</h3>
            <p>Vacuum asks to control Finder and to access your Desktop folder. Both are explained below. After that, look for the red canister near the bottom of your screen.</p>
          </div>
        </li>
      </ol>
    </section>
  );
}
