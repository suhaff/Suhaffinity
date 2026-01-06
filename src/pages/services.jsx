import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          High-quality, scalable digital solutions — engineered with precision,
          built for growth.
        </p>
      </div>

      <div className="services-grid">

        {/* Web Development */}
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Modern, responsive, high-performance websites built using the latest
            frontend and backend technologies.
          </p>

          <ul>
            <li>React / Next.js / Vite</li>
            <li>SEO & performance optimized</li>
            <li>Responsive across all devices</li>
          </ul>

          <span className="price">Starting from $800 – $3,500</span>

          <div className="service-actions">
            <Link to="/product" className="btn-primary">
              View Past Products →
            </Link>

            <Link to="/contact" className="btn-secondary">
              Request Service
            </Link>
          </div>
        </div>

        {/* Custom Software */}
        <div className="service-card">
          <h3>Custom Software Solutions</h3>
          <p>
            Tailored software designed specifically for your business logic,
            workflows, and long-term scalability.
          </p>

          <ul>
            <li>Enterprise-grade architecture</li>
            <li>Secure & scalable systems</li>
            <li>Maintenance & support</li>
          </ul>

          <span className="price">Starting from $1,500 – $10,000+</span>

          <div className="service-actions">
            <Link to="/product" className="btn-primary">
              View Past Products →
            </Link>

            <Link to="/contact" className="btn-secondary">
              Request Service
            </Link>
          </div>
        </div>

        {/* API Development */}
        <div className="service-card">
          <h3>API Development</h3>
          <p>
            Robust, secure, and well-documented APIs for seamless integration
            between systems and platforms.
          </p>

          <ul>
            <li>REST / GraphQL APIs</li>
            <li>Authentication & security</li>
            <li>Third-party integrations</li>
          </ul>

          <span className="price">Starting from $600 – $4,000</span>

          <div className="service-actions">
            <Link to="/product" className="btn-primary">
              View Past Products →
            </Link>

            <Link to="/contact" className="btn-secondary">
              Request Service
            </Link>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>
            Elegant, user-focused designs that enhance usability, engagement,
            and brand identity.
          </p>

          <ul>
            <li>Wireframes & prototypes</li>
            <li>Design systems</li>
            <li>Accessibility focused</li>
          </ul>

          <span className="price">Starting from $400 – $2,000</span>

          <div className="service-actions">
            <Link to="/product" className="btn-primary">
              View Past Products →
            </Link>

            <Link to="/contact" className="btn-secondary">
              Request Service
            </Link>
          </div>
        </div>

      </div>

      {/* Custom Demand */}
      <div className="custom-demand">
        <h3>Custom Demand</h3>
        <p>
          Have a unique requirement? Describe your project and provide an
          expected budget range — we’ll tailor a solution for you.
        </p>

        <form className="custom-form">
          <textarea
            placeholder="Describe your project requirements..."
            required
          />

          <select required>
            <option value="">Expected budget range</option>
            <option>$500 – $1,000</option>
            <option>$1,000 – $3,000</option>
            <option>$3,000 – $7,000</option>
            <option>$7,000+</option>
          </select>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
