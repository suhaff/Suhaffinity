import { useParams } from "react-router-dom";

const members = {
  numaan: {
    name: "Numaan Suhaff",
    role: "Founder & CEO",
    image: "/src/assets/team/numaan.jpg",
    intro:
      "Computer Science student and software engineer focused on scalable systems, AI-powered applications, and long-term architectures.",
    about: [
      "Suhaffinity was founded through long nights, collaboration, and a shared belief that software should be built to last. I started this company with the intention of creating systems that scale not just technically, but philosophically — systems that can grow, adapt, and remain meaningful over time.",
      "My work emphasizes clean architecture, thoughtful abstractions, and intelligent systems that balance research with real-world usability."
    ],
    experience:
      "My experience spans AI research, full-stack development, distributed systems, and experimental software. I have built continual learning anomaly detection systems using Vision Transformers, real-time sentiment analysis APIs, collaborative platforms, and interactive narrative-driven applications.",
    passion:
      "I am deeply passionate about long-term thinking in software — designing systems that age gracefully, remain maintainable, and respect both users and engineers. I enjoy exploring the intersection between artificial intelligence, system design, and human-centered technology.",
    links: {
      website: "https://numaansuhaff.xyz",
      linkedin: "https://www.linkedin.com/in/numaansuhaff",
      github: "https://github.com/suhaff",
      email: "mailto:numaansuhaff@suhaffinity.com"
    }
  },

  luqman: {
    name: "Luqmaan Hyder",
    role: "Co-founder & CFO",
    image: "/src/assets/team/luqman.jpg",
    intro:
      "Strategic thinker focused on financial planning, sustainability, and operational structure.",
    about: [
      "I played a critical role in shaping the long-term stability of Suhaffinity. With a strong focus on financial discipline and strategic planning, I ensure that innovation is supported by sustainable execution.",
      "My perspective bridges ambition with realism, enabling the team to pursue bold ideas without losing operational clarity."
    ],
    experience:
      "My experience includes financial modeling, project planning, budgeting, and organizational strategy. I work closely with engineering leadership to align technical goals with long-term business sustainability.",
    passion:
      "I am passionate about building organizations that last — companies where creativity, discipline, and responsibility coexist. I believe strong systems require both technical and financial intelligence.",
    links: {
      linkedin: "#",
      email: "#"
    }
  },

  raza: {
    name: "Raza Momin",
    role: "Co-founder & COO",
    image: "/src/assets/team/raza.jpg",
    intro:
      "Operations-focused leader ensuring execution, coordination, and delivery across teams.",
    about: [
      "I oversee operations and execution at Suhaffinity, translating vision into action. I ensure that projects move efficiently from idea to implementation without sacrificing quality.",
      "My role is central to maintaining alignment between planning, development, and delivery."
    ],
    experience:
      "With experience in operations management, coordination, and workflow optimization, I focus on removing friction from processes and enabling engineers to do their best work.",
    passion:
      "I am driven by structure, clarity, and efficiency. I am passionate about building environments where teams collaborate smoothly and complex systems remain manageable.",
    links: {
      linkedin: "#",
      email: "#"
    }
  }
};

export default function TeamMember() {
  const { name } = useParams();
  const member = members[name];

  if (!member) {
    return (
      <section className="member-page">
        <h1>Profile coming soon</h1>
      </section>
    );
  }

  return (
    <section className="member-page">

      {/* HERO */}
      <div className="member-hero">
        <img
          src={member.image}
          alt={member.name}
          className="member-photo"
        />

        <div className="member-intro">
          <h1>{member.name}</h1>
          <h2>{member.role} — Suhaffinity</h2>
          <p>{member.intro}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="member-content">

        <section>
          <h3>About</h3>
          {member.about.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </section>

        <section>
          <h3>Experience & Work</h3>
          <p>{member.experience}</p>
        </section>

        <section>
          <h3>Passion & Vision</h3>
          <p>{member.passion}</p>
        </section>

        <section className="member-links-section">
          <h3>Contact & Links</h3>

          <div className="member-links">
            {member.links.website && (
              <a href={member.links.website} target="_blank">Website</a>
            )}
            {member.links.linkedin && (
              <a href={member.links.linkedin} target="_blank">LinkedIn</a>
            )}
            {member.links.github && (
              <a href={member.links.github} target="_blank">GitHub</a>
            )}
            {member.links.email && (
              <a href={member.links.email}>Email</a>
            )}
          </div>
        </section>

      </div>
    </section>
  );
}
