// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css'; // Import the CSS file
import backgroundImage from '../images/background_image.jpg'; // Replace with your desired background image

function Home() {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle button click
  const handleGetInTouch = () => {
    navigate('/contact'); // Redirect to Contact page
  };

  return (
    <section 
      className="home-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-container">
        <h2>Welcome to Acroyna Software Solutions</h2>
        <p>
          Welcome to Acroyna Software Solutions, where innovation meets excellence. We are a dedicated team of software developers, designers, and project managers committed to delivering high-quality web, mobile, and desktop applications tailored to meet your unique business needs.
        </p>
        <button className="get-in-touch-button" onClick={handleGetInTouch}>
          Get in Touch
        </button>
      </div>
      <div className="why-choose-us-container">
        <h3>Why Choose Us?</h3>
        <div className="why-choose-us-content">
          <div className="why-item">
            <h4>Expert Team</h4>
            <p>
              Our talented professionals bring years of experience and a wealth of knowledge in the latest technologies and industry trends.
            </p>
          </div>
          <div className="why-item">
            <h4>Quality Assurance</h4>
            <p>
              We are committed to maintaining the highest standards of quality in every project. Our rigorous testing processes guarantee that your applications are reliable and effective.
            </p>
          </div>
          <div className="why-item">
            <h4>Ongoing Support</h4>
            <p>
              Our relationship with clients doesn’t end at project delivery. We provide continuous support and maintenance to ensure your applications remain up-to-date and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
