import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function CustomDemandModal({
  open,
  onClose,
  description,
  budget,
}) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!name || !contact) {
      alert("Please enter your name and email.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          contact,
          description,
          budget,
          service: "Custom Demand",
        },
        PUBLIC_KEY
      );

      alert("We will contact you shortly regarding your request.");

      setName("");
      setContact("");
      onClose();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card amber-glow">
        <h2 className="modal-title">Custom Demand</h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          {/* ✅ Read-only confirmation */}
          <div className="readonly-block">
            <label>Project Description</label>
            <p>{description}</p>
          </div>

          <div className="readonly-block">
            <label>Expected Budget</label>
            <p>{budget}</p>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn-back"
              onClick={onClose}
              disabled={loading}
            >
              ← Back
            </button>

            <button
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
