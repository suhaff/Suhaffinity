export default function ServiceRequestModal({ open, service, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="service-modal">

        {/* Header */}
        <h2 className="service-modal-title">{service}</h2>

        {/* Fields */}
        <div className="service-modal-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
        </div>

        {/* Actions */}
        <div className="service-modal-actions">
          <button className="modal-back" onClick={onClose}>
            ← Back
          </button>

          <button className="modal-submit">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}
