"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import sustainableProject1 from './sustainable-project-1.jpg';
import solarInstallation from './solar-installation.jpg';
import windFarm from './wind-farm.jpg';
import energyEducation from './biofuel-research.jpg';

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        setIsDarkMode(savedMode === 'true');
      }
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDarkMode);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const lightModeColors = {
    bgGradientFrom: '#F2E9E4',
    bgGradientTo: '#9A8C98',
    primaryText: '#22223B',
    secondaryText: '#4A4E69',
    cardBg: 'rgba(242, 233, 228, 0.7)',
    buttonBgPrimary: '#F0A202',
    buttonTextPrimary: 'white',
    buttonBgSecondary: '#4A4E69',
    buttonTextSecondary: 'white',
  };

  const darkModeColors = {
    bgGradientFrom: '#3b2c20',
    bgGradientTo: '#1a130f',
    primaryText: '#F2E9E4',
    secondaryText: '#9A8C98',
    cardBg: 'rgba(47, 37, 31, 0.8)',
    buttonBgPrimary: '#F0A202',
    buttonTextPrimary: '#1a130f',
    buttonBgSecondary: '#9A8C98',
    buttonTextSecondary: '#1a130f',
  };

  const currentColors = isDarkMode ? darkModeColors : lightModeColors;

  return (
    <div
      className={`min-h-screen p-8 relative transition-colors duration-500`}
      style={{
        background: `linear-gradient(to bottom right, ${currentColors.bgGradientFrom}, ${currentColors.bgGradientTo})`,
        color: currentColors.primaryText,
      }}
    >
      <header className='mb-12 flex justify-between items-center px-4 md:px-8 py-4'>
        <h1 className='text-4xl font-bold' style={{ color: currentColors.secondaryText }}>Collective Energy Foundation</h1>
        <nav className='flex items-center space-x-6'>
          <ul className='flex space-x-6'>
            <li><a href="#about" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>About Us</a></li>
            <li><a href="#projects" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>Projects</a></li>
            <li><a href="#contact" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>Contact</a></li>
          </ul>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold" style={{ color: currentColors.secondaryText }}>{user.name}</span>
              <button
                onClick={handleLogout}
                className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-white text-[#1a130f] hover:bg-gray-200' : 'bg-[#4A4E69] text-white hover:bg-opacity-90'}`}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className={`text-lg font-semibold hover:opacity-80 transition duration-300`} style={{ color: currentColors.secondaryText }}>
              Login
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'bg-white text-[#1a130f] hover:bg-gray-200' : 'bg-[#4A4E69] text-white hover:bg-opacity-90'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>
      
      {/* The rest of your landing page content remains here... */}
      <section className='text-center py-20 px-4 md:px-8'>
        <h2 className='text-6xl font-extrabold mb-6 leading-tight' style={{ color: currentColors.primaryText }}>
          Empowering Communities with Sustainable Energy
        </h2>
        <p className='text-xl md:text-2xl mb-10 max-w-3xl mx-auto' style={{ color: currentColors.secondaryText }}>
          Driving positive change through innovative energy solutions and collaborative efforts for a greener future.
        </p>
        <button
          className='font-bold py-4 px-10 rounded-full text-xl hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105'
          style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
        >
          Learn More About Our Mission
        </button>
      </section>

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
            <button
              className='font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition duration-300'
              style={{ backgroundColor: currentColors.buttonBgSecondary, color: currentColors.buttonTextSecondary }}
            >
              Read Our Full Story
            </button>
          </div>
          <div className='relative'>
            <Image
              src={sustainableProject1}
              alt="Sustainable Project"
              className="w-full h-48 object-cover"
              placeholder="blur"
            />
            <div className='absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded'>
              Community Power
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className='py-16 px-4 md:px-8'>
        <h3 className='text-4xl font-bold mb-12 text-center' style={{ color: currentColors.primaryText }}>Our Impactful Projects</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
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
        <div className='text-center mt-12'>
          <button
            className='font-bold py-3 px-8 rounded-full text-lg shadow transition duration-300 hover:bg-opacity-90'
            style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
          >
            See All Projects
          </button>
        </div>
      </section>

      <section
        id="contact"
        className='py-20 px-4 md:px-8 text-center rounded-lg shadow-xl mx-auto max-w-4xl mt-20 transition-colors duration-500'
        style={{ backgroundColor: currentColors.buttonBgSecondary, color: currentColors.buttonTextSecondary }}
      >
        <h3 className='text-4xl font-bold mb-6' style={{ color: currentColors.primaryText }}>Join the Collective Energy Movement</h3>
        <p className='text-xl mb-8' style={{ color: currentColors.primaryText }}>
          Your support helps us bring sustainable energy to more communities worldwide.
        </p>
        <Link href="/donate">
  <button
    className='font-bold py-4 px-10 rounded-full text-xl hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105'
    style={{ backgroundColor: currentColors.buttonBgPrimary, color: currentColors.buttonTextPrimary }}
  >
    Donate Now
  </button>
</Link>
        <p className='mt-8 text-lg' style={{ color: currentColors.primaryText }}>
          Or contact us for partnerships and inquiries: <a href="mailto:info@collectiveenergy.org" className='underline hover:opacity-80 transition duration-300'>info@collectiveenergy.org</a>
        </p>
      </section>

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