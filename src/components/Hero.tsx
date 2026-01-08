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
          At Suhaffinity, we engineer software with a long horizon in mind. The only limit is your imagination. We can create whatever you desire for your business. 
          <br /><br />
          We will be with you every step of the way, from concept to deployment and beyond. We will ensure your software is scalable, secure, and future-proof. We will take your business to infinity and beyond.
          Our solutions are like Icarus, they take for the skies, but they never fall.
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
