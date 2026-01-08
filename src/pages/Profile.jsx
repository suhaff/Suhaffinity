import { useParams } from "react-router-dom";
import { useEffect } from "react";

const members = {
  numaan: {
    name: "Numaan Suhaff",
    role: "Founder & CEO",
    image: "/assets/team/numaan.jpg",
    intro:
      "Computer Science student and software engineer focused on scalable systems, AI-powered applications, and long-term architectures. I created this company with people with the same passion for building to build software that lasts.",
    about: [
      "Suhaffinity was founded through long nights, collaboration, and a shared belief that software should be built to last. I started this company with the intention of creating systems that scale not just technically, but philosophically — systems that can grow, adapt, and remain meaningful over time.",
      "My work emphasizes clean architecture, thoughtful abstractions, and intelligent systems that balance research with real-world usability."
    ],
    experience:
      "My experience spans AI research, full-stack development, distributed systems, and experimental software. I have built continual learning anomaly detection systems using Vision Transformers, real-time sentiment analysis APIs, collaborative platforms, and interactive narrative-driven applications.",
    passion:
      "I am deeply passionate about long-term thinking in software — designing systems that age gracefully, remain maintainable, and respect both users and engineers. I enjoy exploring the intersection between artificial intelligence, system design, and human-centered technology. I love to build and create things that push the boundaries of what's possible. If I were Icarus's engineer, I would have built him wings that could adjust to the altitude automatically.",
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
    image: "/assets/team/luqman.jpg",
    intro:
      "A computer science student who is a strategic thinker focused on financial planning, sustainability, and operational structure. I know how to use money so that it works for us.",
    about: [
      "I played a critical role in shaping the long-term stability of Suhaffinity. With a strong focus on financial discipline and strategic planning, I ensure that innovation is supported by sustainable execution.",
      "My perspective bridges ambition with realism, enabling the team to pursue bold ideas without losing operational clarity. I know ideas can somehow feel overwhelming, but with the right financial structure and guidance anything is possible. I will take your ideas, no matter how big they are and turn them into reality."
    ],
    experience:
      "My experience includes financial modeling, project planning, budgeting, and organizational strategy. I love to create systems that solve problems. I work closely with engineering leadership to align technical goals with long-term business sustainability. All that says is, I know how to take your business to the next level.",
    passion:
      "I am passionate about building companies that last, companies where creativity, discipline, and responsibility coexist. I believe strong systems require both technical and financial intelligence and a way to regulate passion. If I had been Icarus's financial advisor, he would have never flown too close to the sun.",
    links: {
      linkedin: "#",
      email: "#"
    }
  },

  raza: {
    name: "Raza Momin",
    role: "Co-founder & COO",
    image: "/assets/team/raza.jpg",
    intro:
      "A computer science student with operations-focused leader abilities ensuring execution, coordination, and delivery across teams. The glue that holds everything together.",
    about: [
      "I oversee operations and execution at Suhaffinity, translating vision into action. I ensure that projects move efficiently from idea to implementation without sacrificing quality.",
      "My role is central to maintaining alignment between planning, development, and delivery. I believe in quality over quantity, and I work to create processes that enable engineers to focus on what they do best — building great software."
    ],
    experience:
      "With experience in operations management, coordination, and workflow optimization, I focus on removing friction from processes and enabling engineers to do their best work. I make sure that all parts of the organization work together seamlessly to deliver high-quality results on time.",
    passion:
      "I am driven by structure, clarity, and efficiency. I am passionate about building environments where teams collaborate smoothly and complex systems remain manageable. I have a great deal of experience in UI/UX design as well, ensuring that user needs are always front and center. If I were in charge of Icarus's flight plan, he would know if he was flying too high or too low at all times.",
    links: {
      linkedin: "#",
      email: "#"
    }
  }
};

export default function Profile() {
  const { slug } = useParams();
  const member = members[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!member) {
    return (
      <section className="member-page">
        <h1>Profile coming soon</h1>
      </section>
    );
  }

  return (
    <section className="member-page">
      <div className="member-hero">
        <img src={member.image} alt={member.name} className="member-photo" />
        <div className="member-intro">
          <h1>{member.name}</h1>
          <h2>{member.role} — Suhaffinity</h2>
          <p>{member.intro}</p>
        </div>
      </div>

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
