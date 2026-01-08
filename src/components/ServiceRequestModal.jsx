import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ServiceRequestModal({ open, service, onClose }) {
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          service,
          name: e.target.name.value,
          email: e.target.email.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Email sent! You’ll hear from us shortly.");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <form className="service-modal" onSubmit={sendEmail}>
        <h2 className="service-modal-title">{service}</h2>

        <div className="service-modal-fields">
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
        </div>

        <div className="service-modal-actions">
          <button
            type="button"
            className="modal-back"
            onClick={onClose}
          >
            ← Back
          </button>

          <button type="submit" className="modal-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
