import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function CustomDemandModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: e.target.name.value,
        email: e.target.email.value,
        service: "Custom Demand",
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSent(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal amber">
        {sent ? (
          <>
            <h3>Request sent</h3>
            <p>We will contact you shortly regarding your request.</p>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <form onSubmit={submit}>
            <h3>Custom Demand</h3>
            <input name="name" placeholder="Your name" required />
            <input name="email" placeholder="Your Email" required />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
