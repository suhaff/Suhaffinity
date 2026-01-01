import OrbScene from "./OrbScene";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          In infinitum et ultra.<br />
          Engineering beyond limits.
        </h1>

        <p>
          At Suhaffinity, we engineer software with a long horizon in mind —
          systems designed to scale, evolve, and endure.
          <br /><br />
          From first principles to future possibilities, we build with intent,
          precision, and curiosity — shaping technology that lasts beyond trends.
        </p>

        <button
          onClick={() => {
            const section = document.getElementById("company-details");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          >
          Learn More →
        </button>
      </div>

      <div className="hero-right">
        <OrbScene />
      </div>
    </section>
  );
}
