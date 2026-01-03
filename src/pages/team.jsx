import TeamCard from "../components/TeamCard";

import numaan from "../assets/team/numaan.jpg";
import luqman from "../assets/team/luqman.jpg";
import raza from "../assets/team/raza.jpg";

export default function Team() {
  return (
    <section className="team-hero">
      <h1>Meet the Team</h1>
      <p>
        A small, focused team driven by engineering discipline,
        curiosity, and long-term thinking.
      </p>

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
    </section>
  );
}
