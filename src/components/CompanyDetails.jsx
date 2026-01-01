export default function CompanyDetails() {
  return (
    <section className="company-details" id ="company-details">
      <h2>Who We Are</h2>

      <p className="company-intro">
        Suhaffinity is a software-focused technology company built on the belief
        that great systems are not merely created — they are cultivated over time.
        <br /><br />
        We combine disciplined engineering with creative problem-solving to
        develop digital solutions that are resilient, adaptable, and future-ready.
        Whether building modern web platforms or intelligent systems, our focus
        remains constant: clarity, longevity, and purpose.
      </p>

      <div className="slab-grid">
        <div className="slab">
          <h3>Engineering First</h3>
          <p>
            We prioritize clean architecture, maintainability, and performance.
            Every solution is designed with long-term stability and growth at its core.
          </p>
        </div>

        <div className="slab">
          <h3>Innovation Driven</h3>
          <p>
            From modern web platforms to intelligent systems, we explore new
            technologies responsibly — always in service of real, measurable value.
          </p>
        </div>

        <div className="slab">
          <h3>Trust & Reliability</h3>
          <p>
            Trust is earned through consistency, transparency, and dependable delivery.
            We focus on doing things right, not merely doing them fast.
          </p>
        </div>

        <div className="slab">
          <h3>Future Ready</h3>
          <p>
            Our solutions are built to adapt, scale, and evolve as technology and
            business needs change — engineered not just for today, but for what comes next.
          </p>
        </div>
      </div>
    </section>
  );
}
