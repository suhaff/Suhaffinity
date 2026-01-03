import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <h3>Suhaffinity</h3>
          <p>
            <em>In infinitum et ultra.</em><br />
            Engineering scalable, reliable, and future-ready software solutions
            through disciplined engineering and thoughtful design.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:contact@suhaffinity.com">
              contact@suhaffinity.com
              suhaffinity@gmail.com
            </a>
          </p>
          <p>Phone: +60 11-XXXX XXXX</p>
        </div>

        {/* Address */}
        <div>
          <h4>Address</h4>
          <p>
            Penang, Malaysia<br />
            Serving clients remotely worldwide
          </p>
        </div>

        {/* Contact Form (NOW FUNCTIONAL) */}
        <div>
          <h4>Contact Us</h4>
          <ContactForm />
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Suhaffinity. All rights reserved.
      </div>
    </footer>
  );
}
