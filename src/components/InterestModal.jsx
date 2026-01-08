export default function InterestModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Thank you for your interest</h3>
        <p>We’ll be showcasing our work here very soon.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
