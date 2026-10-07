import DownloadButton from "./DownloadButton.jsx";

const flying = [
  { src: "images/fly-pdf.png", x: "44.4%", y: "47.6%", delay: "0s" },
  { src: "images/fly-png.png", x: "39.8%", y: "71.4%", delay: "1.8s" },
  { src: "images/fly-folder.png", x: "48.1%", y: "80%", delay: "3.6s" },
];

export default function Hero() {
  return (
    <>
      <div className="hero wrap">
        <span className="pill">
          <span className="dot" />
          macOS 13+ · Apple Silicon
        </span>
        <h1>Suck it up. Put it back.</h1>
        <p className="lede">
          A little vacuum cleaner for your Mac desktop. Push it over the clutter, and when you want your files
          back, each one lands exactly where it was.
        </p>
        <div className="cta">
          <DownloadButton />
          <p className="fine">
            <span>Free</span>
            <span>Works offline</span>
            <span>1 MB</span>
          </p>
        </div>
      </div>

      <div className="stage">
        <img
          className="scene"
          src="images/hero.jpg"
          width="3240"
          height="1260"
          alt="A red canister vacuum on a dark desktop, sucking up screenshots, PDFs and folders through its floor nozzle"
        />
        {flying.map((icon) => (
          <img
            key={icon.src}
            className="fly"
            src={icon.src}
            alt=""
            style={{ "--x": icon.x, "--y": icon.y, "--d": icon.delay }}
          />
        ))}
      </div>
    </>
  );
}
