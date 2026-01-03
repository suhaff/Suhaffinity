export default function CompanyDetails() {
  return (
    <section className="company-details" id="company-details">
      <h2>Who We Are</h2>

      <p className="company-intro">
        Suhaffinity is a software-focused technology company built on the belief
        that great systems are not merely created — they are cultivated over time.
      </p>

      <div className="principles-grid">
        {/* Engineering First */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Engineering First</h3>
            </div>
            <div className="flip-card-back">
              <p>
                We prioritize clean architecture, maintainability, and performance.
                Every solution is designed with long-term stability and growth at its core.
              </p>
            </div>
          </div>
        </div>

        {/* Innovation Driven */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Innovation Driven</h3>
            </div>
            <div className="flip-card-back">
              <p>
                From modern web platforms to intelligent systems, we explore new
                technologies responsibly — always in service of real, measurable value.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Reliability */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Trust & Reliability</h3>
            </div>
            <div className="flip-card-back">
              <p>
                Trust is earned through consistency, transparency, and dependable delivery.
                We focus on doing things right — not merely doing them fast.
              </p>
            </div>
          </div>
        </div>

        {/* Future Ready */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Future Ready</h3>
            </div>
            <div className="flip-card-back">
              <p>
                Our solutions are built to adapt, scale, and evolve as technology
                and business needs change — engineered for what comes next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
