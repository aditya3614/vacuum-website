import { BAG_PATH } from "../content.js";

export default function Safety() {
  return (
    <section id="safety" className="wrap">
      <p className="eyebrow">Is it safe?</p>
      <h2>Nothing is ever deleted.</h2>
      <div className="safe">
        <div>
          <h3>Files are moved, not removed</h3>
          <p>
            Sucked-up files go to <span className="path">{BAG_PATH}</span>. They stay there, untouched, until you
            empty the bag. You can open that folder from the menu bar at any time.
          </p>
        </div>
        <div>
          <h3>Quit whenever you like</h3>
          <p>
            Quitting, restarting or a crash doesn’t lose anything. The bag and its record of where each file came
            from are on disk, and the vacuum picks up where it left off.
          </p>
        </div>
        <div>
          <h3>Stays on your Mac</h3>
          <p>
            Vacuum never connects to the internet. No analytics, no account, no updates in the background. It only
            touches items sitting directly on your Desktop, never drives or disk images.
          </p>
        </div>
      </div>
    </section>
  );
}
