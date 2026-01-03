export default function Product() {
  const projects = [
    {
      service: "Web Development",
      items: [
        {
          name: "Personal Portfolio",
          desc: "A modern developer portfolio showcasing projects, skills, and design identity.",
          link: "https://www.numaansuhaff.xyz/"
        },
        {
          name: "2nd of August",
          desc: "A story-driven web experience focused on narrative, atmosphere, and minimal UI.",
          link: "https://2nd-of-august-main.vercel.app/"
        }
      ]
    },
    {
      service: "Custom Software Solutions",
      items: [
        {
          name: "Artify",
          desc: "An art marketplace platform featuring catalogue browsing and checkout workflows.",
          link: "https://github.com/suhaff/Artify.git"
        },
        {
          name: "Arena",
          desc: "A competitive system prototype designed for structured interaction and scalability.",
          link: "https://github.com/suhaff/Arena.git"
        }
      ]
    },
    {
      service: "API & System Development",
      items: [
        {
          name: "SmartTask",
          desc: "A productivity-focused task management system with modular architecture.",
          link: "https://github.com/suhaff/SmartTask.git"
        },
        {
          name: "SmartTodo",
          desc: "A lightweight todo system emphasizing clean logic and extensibility.",
          link: "https://github.com/suhaff/SmartTodo.git"
        }
      ]
    },
    {
      service: "AI & Advanced Systems",
      items: [
        {
          name: "Continual Anomaly Detection",
          desc: "A continual learning system for industrial anomaly detection using ViT + DNE.",
          link: "https://github.com/suhaff/Continual-Anomaly-CL.git"
        }
      ]
    }
  ];

  return (
    <section className="product-section">
      <div className="product-header">
        <h2>Our Products & Work</h2>
        <p>
          A selection of projects demonstrating our expertise across software
          engineering, system design, and advanced technologies.
        </p>
      </div>

      {projects.map((group, index) => (
        <div className="product-group" key={index}>
          <h3>{group.service}</h3>

          <div className="product-grid">
            {group.items.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flip-card"
              >
                <div className="flip-inner">
                  <div className="flip-front">
                    <h4>{project.name}</h4>
                    <span>View Project →</span>
                  </div>

                  <div className="flip-back">
                    <p>{project.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
