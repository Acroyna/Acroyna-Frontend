// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import mobileImage from '../images/mobapp.jpg';
import webImage from '../images/webapp.jpg';
import desktopImage from '../images/desktpaap.png';

const services = [
  {
    title: 'Mobile Application',
    description: 'Custom mobile applications tailored to your business needs.',
    imageUrl: mobileImage,
  },
  {
    title: 'Web Application',
    description: 'Dynamic web applications designed for seamless user experiences.',
    imageUrl: webImage,
  },
  {
    title: 'Desktop Application',
    description: 'Dynamic desktop applications designed for seamless user experiences.',
    imageUrl: desktopImage,
  },
];

function Services() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/contact"> {/* Link to the Contact page */}
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
