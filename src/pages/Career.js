import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Import icons
import "./Career.css"; // Import the CSS file
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleLearnMore1Click = () => {
    navigate("/applyform"); // Navigate to the Portfolio page
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed

  const mockData = [
    { title: "Senior Chef", location: "Delhi, India", id: "12345" },
    { title: "Chef", location: "Banglore, India", id: "67890" },
    { title: "Waiter", location: "Delhi, India", id: "11223" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true); // Set hasSearched to true when the form is submitted

    const filteredResults = mockData.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(locationTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <>
      <div>
        <header className="career-header">
          <h1>Because impact matters</h1>
          <nav>
            <form id="career-search-form" onSubmit={handleSearch}>
              <div className="career-input-container">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="career-input-icon"
                />
                <input
                  type="text"
                  placeholder="Search by job title, ID, or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="career-input-container">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="career-input-icon"
                />
                <input
                  type="text"
                  placeholder="City, state, or country/region"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                />
              </div>
              <button type="submit">Search</button>
            </form>
          </nav>
        </header>

        {/* Search Results Section */}
        {hasSearched && (
          <div id="career-search-results">
            {results.length === 0 ? (
              <p>No jobs found.</p>
            ) : (
              <ul>
                {results.map((job) => (
                  <li key={job.id}>
                    {job.title} - {job.location} (ID: {job.id})
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Life at Our Company Sections */}
        <section id="career-life-at-company">
          <h2>Recent Openings</h2>

          {/* Card Container */}
          <div className="career-card-container">
            {/* Benefits Card */}
            <div className="career-card">
              <h3>Head Chef</h3>
              <p>
                We are seeking a
                talented and passionate Head Chef to lead our kitchen team and
                deliver an unforgettable dining experience.
              </p>
              <div className="project-details">
                  <p><strong>#</strong>  Job Id: 17286</p>
                  <p><strong>#</strong>  Date: May 2023</p>
                  <p><strong>#</strong>  Location: Delhi</p>
                </div>
              <button className="action-button" onClick={handleLearnMore1Click}>
                Apply
              </button>
            </div>

            {/* Culture Card */}
            <div className="career-card">
              <h3>Chef</h3>
              <p>
                At Quik Chefs,We are looking for a skilled and passionate Chef
                to join our team and contribute to our culinary excellence.{" "}
              </p>
              <div className="project-details">
                  <p><strong>#</strong>  Job Id: 54637</p>
                  <p><strong>#</strong>  Date: May 2023</p>
                  <p><strong>#</strong>  Location: Bangalore</p>
                </div>
              <button className="action-button" onClick={handleLearnMore1Click}>
                Apply
              </button>
            </div>

            {/* Diversity and Inclusion Card */}
            <div className="career-card">
              <h3>Waiter</h3>
              <p>
                We are looking for friendly, energetic, and customer-focused
                individuals to join our team as Waiters/Waitresses.
              </p>
              <div className="project-details">
                  <p><strong>#</strong>  Job Id: 45271</p>
                  <p><strong>#</strong>  Date: May 2023</p>
                  <p><strong>#</strong>  Location: Mumbai</p>
                </div>
              <button className="action-button" onClick={handleLearnMore1Click}>
                Apply
              </button>
            </div>
          </div>
        </section>

        {/* Life at Our Company Sections */}
        <section id="career-life-at-company">
          <h2>Life at Our Company</h2>

          {/* Card Container */}
          <div className="career-card-container">
            {/* Benefits Card */}
            <div className="career-card">
              <img
                src="https://img.buzzfeed.com/buzzfeed-static/static/2018-10/16/13/asset/buzzfeed-prod-web-05/sub-buzz-28464-1539711964-2.jpg"
                alt="Benefits"
                className="career-card-image"
              />
              <h3>Benefits</h3>
              <p>
                {" "}
                We encourage growth through hands-on experiences, expert-led
                workshops, and opportunities to refine both culinary and digital
                skills. Whether it’s mastering the latest plating techniques or
                developing interactive cooking tutorials, learning never stops
                at Quik Chefs.
              </p>
            </div>

            {/* Culture Card */}
            <div className="career-card">
              <img
                src="https://media.istockphoto.com/id/1426345945/photo/student-cooking-and-teacher-helping-in-a-cooking-class.jpg?s=612x612&w=0&k=20&c=aW23q4mKV-PEvms20MY1fwKq06b-ca5P-N6tT0M3VdY="
                alt="Benefits"
                className="career-card-image"
              />
              <h3>Culture</h3>
              <p>
                At Quik Chefs, we work together like a well-prepped
                kitchen—supportive, fast-paced, and always focused on
                excellence. From food bloggers to recipe developers and software
                engineers, every team member plays a crucial role in crafting a
                top-tier experience for our audience.
              </p>
            </div>

            {/* Diversity and Inclusion Card */}
            <div className="career-card">
              <img
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?semt=ais_hybrid"
                alt="Benefits"
                className="career-card-image"
              />
              <h3>Diversity and Inclusion</h3>
              <p>
                Food has the power to bring people together. That’s why we are
                committed to sharing diverse cuisines, supporting sustainable
                food practices, and helping home cooks and professionals alike
                achieve culinary success.
              </p>
            </div>

            {/* Flexible Work Card */}
            <div className="career-card">
              <img
                src="https://img.freepik.com/premium-photo/chef-teaching-group-students-cooking-class_14117-1129621.jpg"
                alt="Benefits"
                className="career-card-image"
              />
              <h3>Join Us</h3>
              <p>
                At Quik Chefs, we don’t just cook—we create experiences. If
                you’re passionate about food and technology, we’d love to have
                you on board. Let’s build something delicious together!
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Career;
