export default function CompanyDetails() {
  return (
    <section className="company-details">
      <h2>Who We Are</h2>
      <p className="company-intro">
        Suhaffinity is a software-focused technology company dedicated to
        transforming ideas into scalable, reliable, and impactful digital
        solutions. We blend engineering discipline with creative problem-solving
        to build systems that last.
      </p>

      <div className="slab-grid">
        <div className="slab">
          <h3>Engineering First</h3>
          <p>
            We prioritize clean architecture, maintainability, and performance.
            Every solution is built with long-term growth in mind.
          </p>
        </div>

        <div className="slab">
          <h3>Innovation Driven</h3>
          <p>
            From modern web platforms to intelligent systems, we explore new
            technologies responsibly to deliver real value.
          </p>
        </div>

        <div className="slab">
          <h3>Trust & Reliability</h3>
          <p>
            We believe trust is earned through consistency, transparency, and
            dependable delivery — not buzzwords.
          </p>
        </div>

        <div className="slab">
          <h3>Future Ready</h3>
          <p>
            Our solutions are designed to adapt, scale, and evolve as technology
            and business needs change.
          </p>
        </div>
      </div>
    </section>
  );
}
