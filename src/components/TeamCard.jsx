import { useNavigate } from "react-router-dom";


export default function TeamCard({ name, role, image, slug }) {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/team/${slug}`);
  };

  return (
    <div
      className="team-card-3d"
      role="button"
      tabIndex={0}
      onClick={goToProfile}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          goToProfile();
        }
      }}
    >
      <div className="team-card-inner">
        {/* FRONT */}
        <div
          className="team-card-front"
          style={{ backgroundImage: `url(${image})` }}
          aria-label={`${name} photo`}
        />

        {/* BACK */}
        <div className="team-card-back">
          <h3>{name}</h3>
          <p>{role}</p>
          <span>View Profile →</span>
        </div>
      </div>
    </div>
  );
}
