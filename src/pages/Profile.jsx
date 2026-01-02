import { useParams } from "react-router-dom";

export default function Profile() {
  const { slug } = useParams();

  return (
    <section className="profile-page">
      
      {/* HERO */}
      <div className="profile-hero">
        <img
          src="/assets/team/numaan.jpg"
          alt="Numaan Suhaff"
          className="profile-photo"
        />

        <div className="profile-intro">
          <h1>Numaan Suhaff</h1>
          <h2>Founder & CEO</h2>

          <p>
            Computer Science student and software engineer focused on scalable
            systems, AI-powered applications, and long-term architectures.
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="profile-section">
        <h3>About Me</h3>

        <p>
          Suhaffinity was founded through collaboration, long nights, and a shared
          belief that software should be built to last.
        </p>

        <p>
          Alongside close friends and co-founders, I started this company with the
          intention of creating systems that scale not just technically, but
          philosophically — systems that can grow, adapt, and remain meaningful
          over time.
        </p>

        <p>
          My work focuses on clean architecture, intelligent systems, and designing
          software with a long horizon in mind.
        </p>
      </div>

      {/* LINKS */}
      <div className="profile-section">
        <h3>Portfolio & Links</h3>

        <ul className="profile-links">
          <li>
            Website: <a href="https://numaansuhaff.xyz" target="_blank">numaansuhaff.xyz</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/numaansuhaff" target="_blank">linkedin.com/in/numaansuhaff</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/suhaff" target="_blank">github.com/suhaff</a>
          </li>
          <li>
            Email: <a href="mailto:numaansuhaff02@gmail.com">numaansuhaff02@gmail.com</a>
          </li>
        </ul>
      </div>

    </section>
  );
}
