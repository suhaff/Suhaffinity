import { useParams, Navigate } from "react-router-dom";

const teamData = {
  numaan: {
    name: "Numaan Suhaff",
    role: "Founder & CEO",
    image: "/assets/team/numaan.jpg",
    intro:
      "Computer Science student and software engineer focused on scalable systems, AI-powered applications, and long-term architectures.",
    about: [
      "Suhaffinity was founded through collaboration, long nights, and a shared belief that software should be built to last.",
      "Alongside close friends and co-founders, I started this company with the intention of creating systems that scale not just technically, but philosophically — systems that can grow, adapt, and remain meaningful over time.",
      "My work focuses on clean architecture, intelligent systems, and designing software with a long horizon in mind."
    ],
    links: [
      { label: "Website", url: "https://numaansuhaff.xyz" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/numaansuhaff" },
      { label: "GitHub", url: "https://github.com/suhaff" },
      { label: "Email", url: "mailto:numaansuhaff@suhaffinity.com" }
    ]
  },

  luqman: {
    name: "Luqmaan Hyder",
    role: "Co-Founder & CFO",
    image: "/assets/team/luqman.jpg",
    intro:
      "Backend-focused engineer with a strong interest in system reliability, data integrity, and sustainable technical growth.",
    about: [
      "Luqmaan co-founded Suhaffinity with a focus on building financially and technically sustainable systems.",
      "He plays a key role in backend development, infrastructure planning, and ensuring that the company grows responsibly without compromising engineering quality.",
      "With a strong analytical mindset, Luqmaan bridges engineering decisions with long-term operational and financial stability."
    ],
    links: [
      { label: "GitHub", url: "https://github.com/luqspy" },
      { label: "Email", url: "mailto:luqmaan@suhaffinity.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/luqmaanhyder/" }
    ]
  },

  raza: {
    name: "Raza Momin",
    role: "Co-Founder & COO",
    image: "/assets/team/raza.jpg",
    intro:
      "UI/UX designer and operations lead passionate about clarity, usability, and execution.",
    about: [
      "Raza co-founded Suhaffinity with a strong focus on design quality and operational execution.",
      "He ensures that complex systems are presented through clean, intuitive interfaces that users actually enjoy using.",
      "Beyond design, Raza manages day-to-day operations, helping translate vision into consistent delivery."
    ],
    links: [
      { label: "Portfolio", url: "https://raza.design" },
      { label: "Email", url: "mailto:raza@suhaffinity.com" }
    ]
  }
};

export default function Profile() {
  const { slug } = useParams();
  const member = teamData[slug];

  // Safety: redirect if slug not found
  if (!member) return <Navigate to="/team" replace />;

  return (
    <section className="profile-page">
      
      {/* HERO */}
      <div className="profile-hero">
        <img
          src={member.image}
          alt={member.name}
          className="profile-photo"
        />

        <div className="profile-intro">
          <h1>{member.name}</h1>
          <h2>{member.role}</h2>
          <p>{member.intro}</p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="profile-section">
        <h3>About</h3>
        {member.about.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {/* LINKS */}
      <div className="profile-section">
        <h3>Portfolio & Links</h3>
        <ul className="profile-links">
          {member.links.map((link, index) => (
            <li key={index}>
              {link.label}:{" "}
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.url.replace("https://", "")}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
