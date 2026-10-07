import { permissions, notNeeded } from "../content.js";

export default function Permissions() {
  return (
    <section id="privacy" className="wrap">
      <p className="eyebrow">Permissions</p>
      <h2>Two permissions, both for your desktop.</h2>
      <p className="intro">
        macOS shows each request once. You can change either one later in System Settings → Privacy &amp; Security.
      </p>
      <div className="perms">
        {permissions.map((p) => (
          <div className="perm" key={p.title}>
            <span className="kind">{p.kind}</span>
            <h3>{p.title}</h3>
            <p className="prompt">{p.prompt}</p>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div className="never">
        <strong>Not needed:</strong>
        {notNeeded.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
