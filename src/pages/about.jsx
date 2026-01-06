import MissionVisionPanel from "../components/MissionVisionPanel";

export default function About() {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Suhaffinity</h1>
        <p className="about-tagline">
          In infinitum et ultra. Engineering beyond limits.
        </p>

        <div className="about-glow-divider" />
      </div>

      {/* ABOUT STORY */}
      <div className="about-content">
        <p>
          <span className="highlight">Suhaffinity</span> is a software-focused
          technology company built on the belief that great systems are not merely
          created — they are cultivated over time.
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
          At Suhaffinity, software is treated as a living system —
          something to be nurtured, refined, and respected.
        </p>
      </div>

      {/* MISSION & VISION PANELS */}
      <section className="mission-vision-section">
        <h2 className="section-title">Mission & Vision</h2>

        <div className="mv-panels">
          <MissionVisionPanel
            title="Mission"
            subtitle="What we build, and why it matters"
            content={[
              "To design and develop high-quality software solutions that transform ideas into scalable, reliable, and impactful digital products.",
              "We focus on engineering systems that remain resilient under growth, change, and complexity.",
              "Every solution is crafted with long-term maintainability, performance, and clarity at its core."
            ]}
          />

          <MissionVisionPanel
            title="Vision"
            subtitle="Where we are heading"
            content={[
              "To become a trusted technology partner for organizations that value thoughtful engineering.",
              "We envision a future where software systems evolve gracefully instead of being constantly rewritten.",
              "Our goal is to create solutions that continue to generate value long after deployment."
            ]}
          />
        </div>
      </section>

      {/* DEEP DIVE */}
      <section className="mission-vision-deep">
        <div className="deep-block">
          <h3>Our Mission in Practice</h3>
          <p>
            Our mission is realized through disciplined engineering practices,
            clear system boundaries, and a refusal to compromise on quality.
            We believe software should reduce complexity — not introduce more of it.
          </p>
        </div>

        <div className="deep-block">
          <h3>Our Vision for the Future</h3>
          <p>
            We aim to build systems that grow alongside the people who use them.
            By prioritizing adaptability and architectural clarity, we help
            organizations stay relevant in a rapidly evolving technological landscape.
          </p>
        </div>
      </section>

    </section>
  );
}
