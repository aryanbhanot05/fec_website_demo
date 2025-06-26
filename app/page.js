"use client";

import React, { useState, useEffect } from 'react';

import Image from "next/image";
import sustainableProject1 from './sustainable-project-1.jpg';
import solarInstallation from './solar-installation.jpg';
import windFarm from './wind-farm.jpg';
import energyEducation from './biofuel-research.jpg';

const LandingPage = () => {
  // State to manage dark mode preference.
  // Initially set to false (light mode).
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This effect runs once on component mount to check localStorage for dark mode preference.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        setIsDarkMode(savedMode === 'true');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDarkMode);
    }
  }, [isDarkMode]);

  // Toggles the dark mode state, switching between true and false.
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Light Mode: Earthy & Grounded theme.
  const lightModeColors = {
    bgGradientFrom: '#F2E9E4', // Light Peach for gradient start
    bgGradientTo: '#9A8C98',   // Grullo for gradient end
    primaryText: '#22223B',    // Dark Indigo for main text
    secondaryText: '#4A4E69',  // Dark Sapphire for secondary text/accents
    cardBg: 'rgba(242, 233, 228, 0.7)', // Light Peach with opacity for card backgrounds
    buttonBgPrimary: '#F0A202',// Goldenrod for primary button background
    buttonTextPrimary: 'white',// White text for primary button
    buttonBgSecondary: '#4A4E69', // Dark Sapphire for secondary button background
    buttonTextSecondary: 'white',// White text for secondary button
  };

  // Dark Mode: Rich Dark Brown gradient theme.
  const darkModeColors = {
    bgGradientFrom: '#3b2c20', // Darker reddish brown for gradient start
    bgGradientTo: '#1a130f',   // Even darker brown/near black for gradient end
    primaryText: '#F2E9E4',    // Light Peach for primary text (ensures readability)
    secondaryText: '#9A8C98',  // Grullo for softer light text
    cardBg: 'rgba(47, 37, 31, 0.8)', // Dark brown with opacity for card backgrounds
    buttonBgPrimary: '#F0A202',// Goldenrod for primary button (still provides good contrast)
    buttonTextPrimary: '#1a130f', // Dark text on bright button
    buttonBgSecondary: '#9A8C98', // Grullo for secondary button
    buttonTextSecondary: '#1a130f', // Dark text on light button
  };

  // Determine which color palette to use based on the current dark mode state.
  const currentColors = isDarkMode ? darkModeColors : lightModeColors;

  return (
    // Main container for the entire landing page.
    // Applies dynamic background gradient and default text color.
    <div
      className={`min-h-screen p-8 relative transition-colors duration-500`}
      style={{
        background: `linear-gradient(to bottom right, ${currentColors.bgGradientFrom}, ${currentColors.bgGradientTo})`,
        color: currentColors.primaryText, // Default text color for the body content
      }}
    >
      {/* Header Section: Contains site title and navigation. */}
      <header className='mb-12 flex justify-between items-center px-4 md:px-8 py-4'>
        {/* Site title, dynamically styled to ensure visibility in both themes. */}
        <h1 className='text-4xl font-bold' style={{ color: currentColors.secondaryText }}>Collective Energy Foundation</h1>
        <nav className='flex items-center space-x-6'>
          {/* Navigation links. */}
          <ul className='flex space-x-6'>
            <li><a href="#about" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>About Us</a></li>
            <li><a href="#projects" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>Projects</a></li>
            <li><a href="#contact" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>Contact</a></li>
          </ul>
          {/* Dark Mode Toggle Button: Changes appearance based on current mode. */}
          <button
            onClick={toggleDarkMode}
            className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300
                         ${isDarkMode ? 'bg-white text-[#1a130f] hover:bg-gray-200' : 'bg-[#4A4E69] text-white hover:bg-opacity-90'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      {/* Hero Section: Main introductory content with a strong call to action. */}
      <section className='text-center py-20 px-4 md:px-8'>
        <h2 className='text-6xl font-extrabold mb-6 leading-tight' style={{ color: currentColors.primaryText }}>
          Empowering Communities with Sustainable Energy
        </h2>
        <p className='text-xl md:text-2xl mb-10 max-w-3xl mx-auto' style={{ color: currentColors.secondaryText }}>
          Driving positive change through innovative energy solutions and collaborative efforts for a greener future.
        </p>
        {/* Primary call-to-action button. */}
        <button
          className='font-bold py-4 px-10 rounded-full text-xl hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105'
          style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
        >
          Learn More About Our Mission
        </button>
      </section>

      {/* About Us Section: Provides detailed information about the foundation's vision. */}
      <section
        id="about"
        className='rounded-lg shadow-xl p-10 md:p-16 mb-20 mx-auto max-w-6xl transition-colors duration-500'
        style={{ backgroundColor: currentColors.cardBg }}
      >
        <h3 className='text-4xl font-bold mb-8 text-center' style={{ color: currentColors.primaryText }}>Our Vision for a Sustainable World</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='text-lg leading-relaxed mb-6' style={{ color: currentColors.secondaryText }}>
              At the Collective Energy Foundation, we believe in the power of collective action to transform energy landscapes. We champion projects that not only harness clean energy but also uplift local communities, fostering self-sufficiency and environmental stewardship.
            </p>
            <p className='text-lg leading-relaxed mb-6' style={{ color: currentColors.secondaryText }}>
              Our initiatives range from installing solar microgrids in remote villages to developing educational programs that promote energy literacy. Every step we take is guided by our commitment to sustainability and equitable access to clean power.
            </p>
            {/* Secondary call-to-action button within the about section. */}
            <button
              className='font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300'
              style={{ backgroundColor: currentColors.buttonBgSecondary, color: currentColors.buttonTextSecondary }}
            >
              Read Our Full Story
            </button>
          </div>
          <div className='relative'>
            {/* Image illustrating a sustainable project. */}
            <Image
              src={sustainableProject1}
              alt="Sustainable Project"
              className="w-full h-48 object-cover"
              placeholder="blur" // Adds a blurred placeholder while loading
            />
            {/* Optional overlay text for the image. */}
            <div className='absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded'>
              Community Power
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section: Showcases key projects with images and descriptions. */}
      <section id="projects" className='py-16 px-4 md:px-8'>
        <h3 className='text-4xl font-bold mb-12 text-center' style={{ color: currentColors.primaryText }}>Our Impactful Projects</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Project Card 1: Rural Electrification */}
          <div
            className='rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
            style={{ backgroundColor: currentColors.cardBg }}
          >
            <Image
              src={solarInstallation}
              alt="Solar project"
              className="w-full h-48 object-cover"
              placeholder="blur"
            />
            <div className='p-6'>
              <h4 className='text-2xl font-bold mb-3' style={{ color: currentColors.primaryText }}>Rural Electrification</h4>
              <p className='text-md mb-4' style={{ color: currentColors.secondaryText }}>
                Bringing reliable solar power to underserved communities, empowering homes and businesses.
              </p>
              <button className='font-semibold hover:underline' style={{ color: currentColors.buttonBgPrimary }}>
                View Project
              </button>
            </div>
          </div>

          {/* Project Card 2: Wind Energy Development */}
          <div
            className='rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
            style={{ backgroundColor: currentColors.cardBg }}
          >
            <Image
              src={windFarm}
              alt="Wind farm"
              className="w-full h-48 object-cover"
              placeholder="blur"
            />
            <div className='p-6'>
              <h4 className='text-2xl font-bold mb-3' style={{ color: currentColors.primaryText }}>Wind Energy Development</h4>
              <p className='text-md mb-4' style={{ color: currentColors.secondaryText }}>
                Investing in large-scale wind projects to contribute to national clean energy grids.
              </p>
              <button className='font-semibold hover:underline' style={{ color: currentColors.buttonBgPrimary }}>
                View Project
              </button>
            </div>
          </div>

          {/* Project Card 3: Energy Education */}
          <div
            className='rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'
            style={{ backgroundColor: currentColors.cardBg }}
          >
            <Image
              src={energyEducation}
              alt="Biofuel research"
              className="w-full h-48 object-cover"
              placeholder="blur"
            />
            <div className='p-6'>
              <h4 className='text-2xl font-bold mb-3' style={{ color: currentColors.primaryText }}>Energy Education</h4>
              <p className='text-md mb-4' style={{ color: currentColors.secondaryText }}>
                Educating the next generation on sustainable practices and renewable energy technologies.
              </p>
              <button className='font-semibold hover:underline' style={{ color: currentColors.buttonBgPrimary }}>
                View Project
              </button>
            </div>
          </div>
        </div>
        {/* Button to view all projects. */}
        <div className='text-center mt-12'>
          <button
            className='font-bold py-3 px-8 rounded-full text-lg shadow transition duration-300 hover:bg-opacity-90'
            style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
          >
            See All Projects
          </button>
        </div>
      </section>

      {/* Call to Action/Contact Section: Encourages donations and provides contact info. */}
      <section
        id="contact"
        className='py-20 px-4 md:px-8 text-center rounded-lg shadow-xl mx-auto max-w-4xl mt-20 transition-colors duration-500'
        style={{ backgroundColor: currentColors.buttonBgSecondary, color: currentColors.buttonTextSecondary }} // Using secondary button colors for this section's background
      >
        <h3 className='text-4xl font-bold mb-6' style={{ color: currentColors.primaryText }}>Join the Collective Energy Movement</h3>
        <p className='text-xl mb-8' style={{ color: currentColors.primaryText }}>
          Your support helps us bring sustainable energy to more communities worldwide.
        </p>
        {/* Donate button, using primary button styling. */}
        <button
          className='font-bold py-4 px-10 rounded-full text-xl hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105'
          style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
        >
          Donate Now
        </button>
        <p className='mt-8 text-lg' style={{ color: currentColors.primaryText }}>
          Or contact us for partnerships and inquiries: <a href="mailto:info@collectiveenergy.org" className='underline hover:opacity-80 transition duration-300'>info@collectiveenergy.org</a>
        </p>
      </section>

      {/* Footer: Contains copyright and legal links. */}
      <footer className='mt-20 text-center text-sm' style={{ color: currentColors.secondaryText }}>
        <p>&copy; {new Date().getFullYear()} Collective Energy Foundation. All rights reserved.</p>
        <p className='mt-2'>
          <a href="#" className='hover:underline mx-2'>Privacy Policy</a> |
          <a href="#" className='hover:underline mx-2'>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;