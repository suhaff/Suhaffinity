export default function Product() {
  const projects = [
    {
      service: "Web Development",
      items: [
        {
          name: "Personal Portfolio",
          image: "/assets/projects/portfolio.png",
          desc: "A modern developer portfolio showcasing projects, skills, and design identity.",
          link: "https://www.numaansuhaff.xyz/",
        },
        {
          name: "2nd of August",
          image: "/assets/projects/second-of-august.png",
          desc: "A story-driven web experience focused on narrative, atmosphere, and minimal UI.",
          link: "https://2nd-of-august-main.vercel.app/",
        },
        {
          name: "Aegis VPN",
          image: "/assets/projects/aegisvpn.png",
          desc: "A privacy-focused VPN landing experience with pricing tiers and a security-first design.",
          link: "https://aegis-vpn.vercel.app/#pricing",
        },
      ],
    },
    {
      service: "Custom Software Solutions",
      items: [
        {
          name: "Artify",
          image: "/assets/projects/artify.png",
          desc: "An art marketplace platform featuring catalogue browsing and checkout workflows.",
          link: "https://github.com/suhaff/Artify.git",
        },
        {
          name: "Arena",
          image: "/assets/projects/arena.png",
          desc: "A competitive system prototype designed for structured interaction and scalability.",
          link: "https://github.com/suhaff/Arena.git",
        },
        {
          name: "Blockchain Document Verification",
          image: "/assets/projects/blockchain-docs.png",
          desc: "A blockchain-based system for secure document verification and integrity.",
          link: "https://github.com/luqspy/BlockChainBasedDocumentVerificationSystem.git",
        },
      ],
    },
    {
      service: "API & System Development",
      items: [
        {
          name: "SmartTask",
          image: "/assets/projects/smarttask.png",
          desc: "A productivity-focused task management system with modular architecture.",
          link: "https://github.com/suhaff/SmartTask.git",
        },
        {
          name: "SmartTodo",
          image: "/assets/projects/smarttodo.png",
          desc: "A lightweight todo system emphasizing clean logic and extensibility.",
          link: "https://github.com/suhaff/SmartTodo.git",
        },
        {
          name: "Selenium Automation Framework",
          image: "/assets/projects/selenium.png",
          desc: "A scalable Selenium-based test automation framework for web applications.",
          link: "https://github.com/luqspy/SeleniumAutomationFramework.git",
        },
      ],
    },
    {
      service: "AI & Advanced Systems",
      items: [
        {
          name: "Continual Anomaly Detection",
          image: "/assets/projects/anomaly.png",
          desc: "A continual learning system for industrial anomaly detection using ViT + DNE.",
          link: "https://github.com/suhaff/Continual-Anomaly-CL.git",
        },
        {
          name: "ResFCN256 3D Reconstruction",
          image: "/assets/projects/3d-reconstruction.png",
          desc: "A deep learning system for 3D reconstruction using residual FCNs.",
          link: "https://github.com/luqspy/ResFCN256-3D-Reconstruction.git",
        },
      ],
    },
  ];

  return (
    <section className="product-section">
      <div className="product-header">
        <h2>Our Products & Work</h2>
        <p>
          A selection of projects demonstrating our expertise across software
          engineering, system design, and advanced technologies.
        </p>
        <div className="product-glow-divider" />
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
                className="project-card"
              >
                <div className="flip-card">
                  <div className="flip-inner">
                    {/* FRONT */}
                    <div className="flip-front">
                      <img src={project.image} alt={project.name} />
                    </div>

                    {/* BACK */}
                    <div className="flip-back">
                      <p>{project.desc}</p>
                      <span>View Project →</span>
                    </div>
                  </div>
                </div>

                <h4 className="project-name">{project.name}</h4>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
