import { useNavigate } from "react-router-dom";

export default function MissionVisionCard() {
  const navigate = useNavigate();

  return (
    <div
      className="mv-flip-card"
      onClick={() => navigate("/buzz")}
    >
      <div className="mv-flip-inner">

        {/* Front */}
        <div className="mv-front">
          <h3>Mission & Vision</h3>
          <span>Click to explore →</span>
        </div>

        {/* Back */}
        <div className="mv-back">
          <h4>Mission</h4>
          <p>
            To design and develop high-quality software solutions that transform
            ideas into scalable, reliable, and impactful digital products —
            engineered to grow beyond their original purpose.
          </p>

          <h4>Vision</h4>
          <p>
            To become a trusted technology partner recognized for thoughtful
            engineering, long-term thinking, and solutions that continue to
            create value far into the future.
          </p>
        </div>

      </div>
    </div>
  );
}
