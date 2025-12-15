export default function VideoSection() {
  return (
    <section className="section">
      <h2>Company Introduction</h2>
      <video width="70%" controls>
        <source src="intro.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </section>
  );
}
