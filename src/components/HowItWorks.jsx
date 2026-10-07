import { steps, details } from "../content.js";

export default function HowItWorks() {
  return (
    <section id="how" className="wrap">
      <p className="eyebrow">How it works</p>
      <h2>Three moves, and your desktop is clear.</h2>
      <p className="intro">
        Vacuum sits on your desktop above your icons and below every app window. Nothing changes about how you use
        your Mac until you grab the nozzle.
      </p>

      <div className="steps">
        {steps.map((step, i) => (
          <div className="step" key={step.title}>
            <figure>
              <img src={step.image} alt={step.alt} loading="lazy" />
            </figure>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="details">
        {details.map((d) => (
          <div key={d.title}>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
