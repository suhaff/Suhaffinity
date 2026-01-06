export default function MissionVisionPanel({ title, subtitle, content }) {
  return (
    <div className="mv-panel">
      <h3>{title}</h3>
      <span className="mv-subtitle">{subtitle}</span>

      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
