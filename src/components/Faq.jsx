import { BAG_PATH } from "../content.js";

const questions = [
  {
    q: "Where do my files go?",
    a: (
      <p>
        Into a normal folder at <span className="path">{BAG_PATH}</span>. Open it from the menu bar with{" "}
        <strong>Show Bag in Finder</strong>. You can drag files out of it by hand too.
      </p>
    ),
  },
  {
    q: "Why does macOS say it can’t verify Vacuum?",
    a: (
      <p>
        Apps from outside the App Store are checked by Apple through notarization, which needs a paid developer
        account. Vacuum is not notarized yet, so macOS asks you to approve it once under Privacy &amp; Security. See
        the install steps above.
      </p>
    ),
  },
  {
    q: "My icons didn’t go back to the same spot.",
    a: (
      <p>
        Exact positions only work when your desktop isn’t sorted automatically. Click the desktop, then choose{" "}
        <strong>View → Sort By → None</strong> in Finder’s menu bar. If you use Stacks, turn them off too.
      </p>
    ),
  },
  {
    q: "Can I turn off the sound?",
    a: (
      <p>
        Yes. Click the Vacuum icon in the menu bar and untick <strong>Sounds</strong>.
      </p>
    ),
  },
  {
    q: "I can’t find the vacuum.",
    a: (
      <p>
        Full-screen apps hide the desktop, so switch to a regular desktop first. If it is still missing, choose{" "}
        <strong>Bring Vacuum Back</strong> from the menu bar icon and it returns to the bottom of your main screen.
      </p>
    ),
  },
  {
    q: "Does it work on Intel Macs?",
    a: <p>Not yet. Vacuum needs an Apple Silicon Mac (M1 or later) running macOS 13 Ventura or newer.</p>,
  },
  {
    q: "How do I uninstall it?",
    a: (
      <>
        <p>
          Empty the bag first with <strong>Throw Everything Out</strong>, then quit from the menu bar and move
          Vacuum from Applications to the Trash.
        </p>
        <p>
          To remove its saved settings too, delete <span className="path">~/Library/Application Support/Vacuum</span>{" "}
          once the bag is empty.
        </p>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section id="faq" className="wrap">
      <p className="eyebrow">FAQ</p>
      <h2>Questions people ask.</h2>
      <div className="faq">
        {questions.map(({ q, a }) => (
          <details key={q}>
            <summary>{q}</summary>
            <div>{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
