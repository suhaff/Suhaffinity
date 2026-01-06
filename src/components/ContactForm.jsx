import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        console.error("EmailJS error:", error);
        alert("Failed to send message.");
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
        rows="4"
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
