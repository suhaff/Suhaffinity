import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Buzz from "./pages/Buzz";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
