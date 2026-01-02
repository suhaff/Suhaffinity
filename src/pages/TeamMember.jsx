import { useParams } from "react-router-dom";

export default function TeamMember() {
  const { name } = useParams();

  if (name !== "numaan") {
    return (
      <section style={{ padding: "8rem 8%", color: "white" }}>
        <h1>Profile coming soon</h1>
      </section>
    );
  }

  return (
    <section className="member-page">
      <div className="member-hero">
        <img
          src="/src/assets/team/numaan.jpg"
          alt="Numaan Suhaff"
          className="member-photo"
        />

        <div className="member-intro">
          <h1>Numaan Suhaff</h1>
          <h2>Founder & CEO — Suhaffinity</h2>

          <p>
            Suhaffinity was born from long nights, shared ambition, and the belief
            that software should be built to last. Together with close friends,
            I founded Suhaffinity to create systems that think long-term — not
            quick fixes, but enduring architectures.
          </p>
        </div>
      </div>

      <div className="member-content">
        <section>
          <h3>About Me</h3>
          <p>
            I am a Computer Science student and software engineer focused on
            scalable systems, AI-powered applications, and long-term software
            architecture. I enjoy turning complex ideas into reliable,
            maintainable solutions — especially where research meets production.
          </p>
        </section>

        <section>
          <h3>Background & Experience</h3>
          <p>
            My work spans AI, full-stack development, distributed systems, and
            game development. I have built projects ranging from continual
            learning anomaly detection systems using Vision Transformers, to
            real-time sentiment analysis APIs, collaborative platforms, and
            tactical games.
          </p>
        </section>

        <section>
          <h3>Links & Profiles</h3>
          <ul className="member-links">
            <li>
              Portfolio:{" "}
              <a href="https://numaansuhaff.xyz" target="_blank">
                numaansuhaff.xyz
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/numaansuhaff"
                target="_blank"
              >
                linkedin.com/in/numaansuhaff
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/suhaff" target="_blank">
                github.com/suhaff
              </a>
            </li>
            <li>Email: numaansuhaff02@gmail.com</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
