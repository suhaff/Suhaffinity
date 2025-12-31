import OrbScene from "./OrbScene";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Create. Future. Together.</h1>
        <p>
          Actively shaping the future, building innovative software solutions
          that turn ideas into reality.
        </p>
        <button>Learn More →</button>
      </div>

      <div className="hero-right">
        <OrbScene />
      </div>
    </section>
  );
}
