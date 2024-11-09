// src/pages/About.js
import React from 'react';
import meraj from '../images/meraj.jpg';
import najmus from '../images/najmus.jpg';
import linkedinImg from '../images/linkedln_img.png';
import './About.css'; // Import the CSS file

// CEO data
const ceos = [
  {
    name: 'Md. Meraj Alam',
    designation: 'Co-Founder & CEO',
    imageUrl: meraj,
    linkedin: 'https://www.linkedin.com/in/md-meraj-alam-843957182/',
  },
  {
    name: 'Najmus Seemab',
    designation: 'Co-Founder & CEO',
    imageUrl: najmus,
    linkedin: 'https://www.linkedin.com/in/najmus-seemab/',
  },
];

// Card data
const cards = [
  {
    title: 'What We Do',
    content: (
      <ul className="services-list">
        <li>
          <strong>Web Development:</strong> Our team creates responsive and visually appealing websites that engage users and enhance their experience.
        </li>
        <li>
          <strong>Mobile App Development:</strong> We develop user-friendly mobile applications designed to capture your audience’s attention.
        </li>
        <li>
          <strong>Desktop Application Development:</strong> Our solutions are robust, efficient, and tailored to meet specific functional requirements.
        </li>
      </ul>
    ),
  },
  {
    title: 'Our Approach',
    content: (
      <p>
        We pride ourselves on our customer-centric approach. Every project begins with a deep understanding of your business objectives and challenges. Our agile development process ensures flexibility and adaptability, allowing us to deliver solutions that not only meet but exceed your expectations.
      </p>
    ),
  },
  {
    title: 'Join Us on Your Journey',
    content: (
      <p>
        At Acroyna Software Solutions, we are passionate about turning your ideas into reality. Let us be your trusted partner in navigating the digital landscape. Contact us today to learn how we can help you achieve your business goals.
      </p>
    ),
  },
];

function About() {
  return (
    <section className="about-section">
      <div className="content-left">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mission">
          At Acroyna, our mission is to empower businesses by leveraging technology to streamline operations, enhance customer engagement, and drive growth. We believe that every organization deserves access to solutions that not only solve problems but also inspire success.
        </p>

        {/* Render cards for What We Do, Our Approach, and Join Us on Your Journey */}
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{card.title}</h3>
              <div className="card-content">{card.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-right">
        <h3 className="about-section-header">Meet Our CEOs</h3>
        <div className="flex flex-col items-center mt-4">
          {ceos.map((ceo, index) => (
            <div key={index} className="relative text-center mb-8">
              <a href={ceo.linkedin} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative">
                  <img
                    src={ceo.imageUrl}
                    alt={ceo.name}
                    className="ceo-image"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={linkedinImg}
                      alt="LinkedIn"
                      className="linkedin-icon"
                    />
                  </div>
                </div>
                <h4 className="mt-2 font-semibold group-hover:underline">{ceo.name}</h4>
                <p className="text-gray-600 group-hover:underline">{ceo.designation}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
