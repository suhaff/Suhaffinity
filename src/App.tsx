import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Product from "./components/Product";
import MissionVision from "./components/MissionVision";
import Team from "./components/Team";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Product />
      <MissionVision />
      <Team />
      <VideoSection />
      <Footer />
    </>
  );
}

export default App;
