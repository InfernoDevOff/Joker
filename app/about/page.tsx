'use client'

import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const AboutPage: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

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

  const reviews = [
    { name: 'Ali Khan', role: 'Creative Designer', review: 'Joining Joker Club has been a transformative experience. I’ve found my creative spark and collaborated with amazing talents!' },
    { name: 'Ayesha Malik', role: 'Gamer', review: 'The community is incredibly welcoming. I love participating in events and connecting with like-minded gamers.' },
    { name: 'Omar Farooq', role: 'Developer', review: 'Joker Club has provided me with opportunities to grow my skills and share my knowledge with others.' },
    { name: 'Fatima Noor', role: 'Content Creator', review: 'This club is more than just a community; it’s a family. I’ve made friends for life here!' },
    { name: 'Zainab Raza', role: 'Event Coordinator', review: 'Every event is a blast! Joker Club keeps things fun and engaging for everyone.' },
    { name: 'Bilal Shah', role: 'Artist', review: 'I appreciate the support from fellow members. It’s a great place to showcase my art and receive feedback.' },
  ];

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black overflow-hidden">
      {/* Navbar at the top */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Joker Club</div>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none md:hidden text-white">
              <span>Menu</span>
              <FaCaretDown className="ml-2" />
            </button>

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
                <Link key={name} href={href} className="hover:underline text-white">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isDropdownOpen && <div className="h-48" />} {/* Adjust height as needed */}

      {/* About Us Content */}
      <div className="relative z-10 text-center p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl mt-20 max-w-4xl">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">About Us</h2>
        <p className="mt-4 text-lg leading-relaxed animate-fade-in-up delay-150">
          Welcome to Joker Club, a community built around creativity, connection, and the spirit of the Joker.
          Our mission is to bring people together in a fun, engaging, and supportive environment where everyone can explore their interests and develop their skills.
        </p>
        <p className="mt-4 text-lg leading-relaxed animate-fade-in-up delay-300">
          At Joker Club, we believe that every member has something unique to offer. Our platform encourages collaboration, sharing of ideas, and fostering friendships that transcend boundaries. 
          Whether you are an artist, gamer, or just someone looking for a place to connect, you’ll find a home here.
        </p>
        <h3 className="text-3xl font-bold mt-6 mb-4 animate-fade-in-up">Our Mission</h3>
        <p className="mt-4 text-lg leading-relaxed animate-fade-in-up delay-450">
          Our mission is to empower individuals to unleash their creativity and build lasting connections within a vibrant community. 
          We strive to create an inclusive space that nurtures talents and promotes a sense of belonging.
        </p>
        <h3 className="text-3xl font-bold mt-6 mb-4 animate-fade-in-up">Our Values</h3>
        <ul className="list-disc list-inside mb-4 text-lg leading-relaxed animate-fade-in-up delay-600">
          <li>Inclusivity: We welcome everyone, regardless of background or experience.</li>
          <li>Collaboration: Working together enhances creativity and innovation.</li>
          <li>Respect: We value the opinions and contributions of all members.</li>
          <li>Growth: We encourage continuous learning and personal development.</li>
        </ul>

        {/* Member Reviews Section */}
        <h3 className="text-3xl font-bold mt-10 mb-4 animate-fade-in-up">Member Reviews</h3>
        <div className="flex flex-col space-y-6 mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg animate-fade-in-up delay-100">
              <h4 className="text-lg font-semibold">{review.name}</h4>
              <p className="text-sm text-yellow-300">{review.role}</p>
              <p className="mt-2 text-md leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
