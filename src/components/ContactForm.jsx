import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("SEND BUTTON CLICKED");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EMAIL ERROR:", error);
        alert("Failed to send message. Check console.");
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="footer-form">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows="3"
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}
