import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import BelowDiscover from "./components/BelowDiscover";
import ExploreServices from "./components/ExploreServices";
import ChefStaffing from "./components/ChefStaffing";
import Footer from "./components/Footer";
import Chefs from "./components/Chefs";
import Testimonials from "./components/Testimonials";
import About from "./pages/About"; // Import the About page
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import LuxuryWeddingCatering from "./pages/LuxuryWeddingCatering";
import CorporateGalaDinner from "./pages/CorporateGalaDinner";
import Experience from "./pages/Experience";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ApplyForm from "./pages/ApplyForm";
import FAQChatbot from "./components/FAQChatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Discover />
              <BelowDiscover />
              <ExploreServices />
              <ChefStaffing />
              <Chefs />
              <Testimonials />
              <FAQChatbot/>
              <Footer />
            </>
          }
        />
        {/* About Route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/luxury-wedding-catering"
          element={<LuxuryWeddingCatering />}
        />
        <Route
          path="/corporate-gala-dinner"
          element={<CorporateGalaDinner />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/applyform" element={<ApplyForm />} />
      </Routes>
      
    </Router>
  );
}

export default App;
