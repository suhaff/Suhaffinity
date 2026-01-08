import TeamCard from "../components/TeamCard";

import numaan from "../assets/team/numaan.jpg";
import luqman from "../assets/team/luqman.jpg";
import raza from "../assets/team/raza.jpg";

export default function Team() {
  return (
    <section className="team-hero">

      {/* HERO */}
      <div className="team-header">
        <h1>Meet the Team</h1>
        <p className="team-subtitle">
          A small, focused team driven by engineering discipline,
          curiosity, and long-term thinking and a burning passion to build.
        </p>

        <div className="team-glow-divider" />
      </div>

      {/* TEAM PHILOSOPHY */}
      <div className="team-intro">
        <p>
          Suhaffinity is built by individuals who believe that great software
          is not the result of shortcuts, but of deliberate thinking,
          collaboration, and respect for the craft.
        </p>

        <p>
          Each member of our team brings a distinct perspective — technical,
          strategic, and operational — allowing us to design systems that are
          not only functional, but resilient and future-ready.
        </p>
      </div>

      {/* TEAM CARDS */}
      <div className="team-cards">
        <TeamCard
          name="Numaan Suhaff"
          role="Founder & CEO"
          image={numaan}
          slug="numaan"
        />

        <TeamCard
          name="Luqmaan Hyder"
          role="Co-founder & CFO"
          image={luqman}
          slug="luqman"
        />

        <TeamCard
          name="Raza Momin"
          role="Co-founder & COO"
          image={raza}
          slug="raza"
        />
      </div>

      {/* ROLES & COLLABORATION */}
      <section className="team-details">
        <div className="team-detail-block">
          <h3>Leadership & Vision</h3>
          <p>
            The leadership at Suhaffinity is deeply involved in both strategy
            and execution. Decisions are guided by long-term sustainability,
            technical clarity, and a strong sense of responsibility to clients
            and users alike.
          </p>
        </div>

        <div className="team-detail-block">
          <h3>Engineering Collaboration</h3>
          <p>
            We work as a tightly integrated unit — design, engineering, and
            operations move together. This allows us to reduce friction,
            avoid misalignment, and deliver solutions that feel cohesive
            rather than stitched together.
          </p>
        </div>

        <div className="team-detail-block">
          <h3>Culture & Values</h3>
          <p>
            Our culture prioritizes clarity over speed, learning over ego,
            and craftsmanship over trends. Every project is treated as a
            long-term commitment, not a short-term delivery.
          </p>
        </div>
      </section>

    </section>
  );
}
