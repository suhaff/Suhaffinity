import MissionVisionFlip from "../components/MissionVisionFlip";

export default function About() {
  return (
    <section className="about-page">

      {/* Centered Hero */}
      <div className="about-hero">
        <h1>About Suhaffinity</h1>
        <p className="about-tagline">
          In infinitum et ultra. Engineering beyond limits.
        </p>
      </div>

      {/* Long-form Content */}
      <div className="about-content">
        <p>
          Suhaffinity is a software-focused technology company built on the belief
          that great systems are not merely created — they are cultivated over time.
        </p>

        <p>
          Founded through collaboration, long nights, and shared ambition,
          Suhaffinity emerged from a desire to build software that lasts.
          The company was shaped by engineers who value discipline, clarity,
          and long-term thinking over short-lived trends.
        </p>

        <p>
          We design systems that scale not just technically, but conceptually —
          systems that remain adaptable as technology, users, and goals evolve.
          Our work emphasizes clean architecture, intentional decisions,
          and maintainable solutions.
        </p>

        <p>
          Whether building modern web platforms or intelligent systems,
          our focus remains consistent: clarity, longevity, and purpose.
        </p>

        <p>
          At Suhaffinity, software is treated as a living system —
          something to be nurtured, refined, and respected.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <h2 className="section-title">Mission & Vision</h2>

        <div className="mv-grid">
          <MissionVisionFlip
            title="Mission"
            content="To design and develop high-quality software solutions that transform ideas into scalable, reliable, and impactful digital products — engineered to grow beyond their original purpose."
          />

          <MissionVisionFlip
            title="Vision"
            content="To become a trusted technology partner recognized for thoughtful engineering, long-term thinking, and solutions that continue to create value far into the future."
          />
        </div>
      </section>

    </section>
  );
}
