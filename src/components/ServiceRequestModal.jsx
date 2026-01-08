import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ServiceRequestModal({ open, service, onClose }) {
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const send = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        service,
        name: e.target.name.value,
        email: e.target.email.value,
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
            <h3>Request received</h3>
            <p>We will contact you shortly regarding {service}.</p>
            <button onClick={onClose}>Close</button>
          </>
        ) : (
          <form onSubmit={send}>
            <h3>{service}</h3>
            <input name="name" placeholder="Your name" required />
            <input name="email" placeholder="Your email" required />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
