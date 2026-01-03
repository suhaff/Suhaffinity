import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages (MATCH CASE + EXTENSION EXACTLY)
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Product from "./pages/product.jsx";
import Team from "./pages/team.jsx";
import Profile from "./pages/Profile.jsx";
import Buzz from "./pages/Buzz.jsx";

// components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      {/* Star background */}
      <div className="stars" />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/buzz" element={<Buzz />} />

        {/* Individual team member profile */}
        <Route path="/team/:slug" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
