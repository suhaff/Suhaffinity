import { useNavigate } from "react-router-dom";

export default function MissionVisionFlip({ title, content }) {
  const navigate = useNavigate();

  return (
    <div
      className="mv-flip-card"
      onClick={() => navigate("/buzz")}
      role="button"
      tabIndex={0}
    >
      <div className="mv-flip-inner">

        {/* Front side */}
        <div className="mv-front">
          <h3>{title}</h3>
          <span>Click to explore →</span>
        </div>

        {/* Back side */}
        <div className="mv-back">
          <p>{content}</p>
        </div>

      </div>
    </div>
  );
}
