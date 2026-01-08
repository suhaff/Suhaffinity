import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceRequestModal from "../components/ServiceRequestModal";
import InterestModal from "../components/InterestModal";
import CustomDemandModal from "../components/CustomDemandModal";

export default function Services() {
  const [serviceModal, setServiceModal] = useState(null);
  const [interestModal, setInterestModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);

  // Custom Demand shared state
  const [customDescription, setCustomDescription] = useState("");
  const [customBudget, setCustomBudget] = useState("");

  return (
    <>
      <section className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            High-quality, scalable digital solutions — engineered with precision,
            built for growth.
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              title: "Web Development",
              price: "$800 – $3,500",
              service: "Web Development",
              desc:
                "Modern, responsive, high-performance websites built using the latest frontend and backend technologies.",
              list: [
                "React / Next.js / Vite",
                "SEO & performance optimized",
                "Responsive across all devices",
              ],
            },
            {
              title: "Custom Software Solutions",
              price: "$1,500 – $10,000+",
              service: "Custom Software",
              desc:
                "Tailored software designed specifically for your business logic, workflows, and long-term scalability.",
              list: [
                "Enterprise-grade architecture",
                "Secure & scalable systems",
                "Maintenance & support",
              ],
            },
            {
              title: "API Development",
              price: "$600 – $4,000",
              service: "API Development",
              desc:
                "Robust, secure, and well-documented APIs for seamless integration between systems and platforms.",
              list: [
                "REST / GraphQL APIs",
                "Authentication & security",
                "Third-party integrations",
              ],
            },
            {
              title: "UI / UX Design",
              price: "$400 – $2,000",
              service: "UI / UX Design",
              desc:
                "Elegant, user-focused designs that enhance usability, engagement,and brand identity.",
                list: [
                "Wireframes & prototypes",
                "Design systems",
                "Accessibility focused",
              ],
            },
          ].map((item) => (
            <div className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <ul>
                {item.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>

              <span className="price">Starting from {item.price}</span>

              <div className="service-actions">
                <Link to="/product" className="btn-primary">
                View Past Products →
                </Link>


                <button
                  className="btn-secondary"
                  onClick={() => setServiceModal(item.service)}
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Custom Demand (UI unchanged) */}
        <div className="custom-demand">
          <h3>Custom Demand</h3>
          <p>
            Have a unique requirement? Describe your project and provide an
            expected budget range — we’ll tailor a solution for you.
          </p>

          <form
            className="custom-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <textarea
              placeholder="Describe your project requirements..."
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              required
            />

            <select
              value={customBudget}
              onChange={(e) => setCustomBudget(e.target.value)}
              required
            >
              <option value="">Expected budget range</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $7,000</option>
              <option>$7,000+</option>
            </select>

            <button type="button" onClick={() => setCustomModal(true)}>
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Modals */}
      <ServiceRequestModal
        open={!!serviceModal}
        service={serviceModal}
        onClose={() => setServiceModal(null)}
      />

      <InterestModal
        open={interestModal}
        onClose={() => setInterestModal(false)}
      />

      <CustomDemandModal
        open={customModal}
        onClose={() => setCustomModal(false)}
        description={customDescription}
        budget={customBudget}
      />
    </>
  );
}
