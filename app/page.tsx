'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaUsers, FaServer, FaQuestionCircle, FaQuoteLeft, FaLightbulb, FaCaretDown } from 'react-icons/fa';

export default function HomePage() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 1.5;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black overflow-hidden">
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Joker Club</div>
          <div className="relative">
            {/* Show dropdown button only on small screens */}
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none md:hidden">
              <span>Menu</span>
              <FaCaretDown className="ml-2" />
            </button>

            {/* Show dropdown menu only on mobile */}
            {isDropdownOpen && (
              <div className="absolute right-0 bg-gray-800 shadow-lg rounded-lg mt-2 p-4 z-20">
                <div className="text-center text-yellow-300 font-semibold mb-2">
                  Choose an option:
                </div>
                <ul>
                  {[ 
                    { name: 'Home', href: '/' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Our Teams', href: '/teams' },
                    { name: 'Servers', href: '/servers' },
                    { name: 'Testimonials', href: '/testimonials' },
                    { name: 'Events', href: '/events' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'Simulations', href: '/simulations' },
                  ].map(({ name, href }) => (
                    <li key={name} className="my-2">
                      <Link href={href} className="hover:underline transition block">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Show menu items directly on larger screens */}
            <div className="hidden md:flex space-x-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Teams', href: '/teams' },
                { name: 'Servers', href: '/servers' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Events', href: '/events' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Simulations', href: '/simulations' },
              ].map(({ name, href }) => (
                <Link key={name} href={href} className="hover:underline">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Add a spacer div when dropdown is open */}
      {isDropdownOpen && <div className="h-48" />} {/* Adjust height as needed */}

      <section id="home" className="text-center p-10 mt-20 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg">
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-yellow-300 mb-4">
            Welcome to the Joker Club
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Join us for fun, games, and a fantastic community filled with exciting events and collaborative projects!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://discord.gg/jokerop"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-110 transition transform"
            >
              Join Now
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-no-repeat bg-cover" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} />
      </section>

      {/* Other sections remain the same... */}
      <section id="aboutus" className="mt-16 w-full max-w-4xl p-8">
        <h2 className="text-4xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center">
          We are a vibrant community of Joker fans dedicated to fun, creativity, and connection. Join us to engage in exciting activities and meet like-minded individuals!
        </p>
        <div className="mt-8 text-center">
          <FaLightbulb className="inline-block text-5xl mb-2" />
          <p className="mt-2">Our mission is to create an inclusive space where everyone feels welcome to express themselves.</p>
        </div>
      </section>

      <section id="ourteams" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Our Teams</h2>
        <div className="mt-4 text-center">
          <FaUsers className="inline-block text-6xl mb-2" />
          <p>Our teams are made up of passionate individuals who work together to organize events and maintain a friendly atmosphere.</p>
        </div>
      </section>

      <section id="servers" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Servers</h2>
        <div className="mt-4 text-center">
          <FaServer className="inline-block text-6xl mb-2" />
          <p>We offer multiple servers for different activities, including gaming, art, and general discussions. Join the one that fits your interests!</p>
        </div>
      </section>

      <section id="whyjoinus" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Why Join Us</h2>
        <div className="mt-4 text-center">
          <FaQuestionCircle className="inline-block text-6xl mb-2" />
          <p>By joining our server, you&apos;ll gain access to exclusive events, a supportive community, and the opportunity to make lasting friendships!</p>
        </div>
      </section>

      <section id="testimonials" className="mt-16 w-full max-w-4xl p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center">What Our Members Say</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-4 bg-gray-800 rounded-lg">
            <FaQuoteLeft className="text-4xl text-gray-400 mb-2" />
            <p>&quot;This server has changed my life! The community is amazing!&quot;</p>
            <span className="block text-right text-sm font-semibold">- Member Name</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <FaQuoteLeft className="text-4xl text-gray-400 mb-2" />
            <p>&quot;I&apos;ve met so many great friends and had a blast playing games!&quot;</p>
            <span className="block text-right text-sm font-semibold">- Another Member</span>
          </div>
        </div>
      </section>

      <section id="events" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-4 text-center">
          <p>Stay tuned for exciting events happening soon!</p>
        </div>
      </section>

      <section id="faq" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-4 text-center">
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>
      </section>

      <section id="simulations" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Simulations</h2>
        <div className="mt-4 text-center">
          <p>Explore our simulations for an engaging experience!</p>
        </div>
      </section>

      <footer className="mt-16 p-4 text-center text-gray-400">
        © 2024 Joker Club. All rights reserved.
      </footer>
    </main>
  );
}
