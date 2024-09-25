'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing the Image component from Next.js
import { FaCaretDown } from 'react-icons/fa';

interface Member {
  name: string;
  image: string;
}

interface Category {
  title: string;
  members: Member[];
}

const categories: Category[] = [
  {
    title: 'REAL FOUNDERS',
    members: [
      { name: 'Matlabi', image: '/Matlabi.jpg' },
      { name: 'Skull', image: '/skull.jpg' },
      { name: 'Wali', image: '/wali.png' },
    ],
  },
  {
    title: 'CREATOR OF JOKER',
    members: [
      { name: 'Atif', image: '/atif.jpg' },
      { name: 'Bamsi', image: '/Bamsi.png' },
      { name: 'Waleed', image: '/waleed.png' },
    ],
  },
  {
    title: 'POWER OF JOKER',
    members: [
      { name: 'Captain', image: '/images/captain.jpg' },
      { name: 'Areeb', image: '/images/areeb.jpg' },
    ],
  },
  {
    title: 'HANDLERS OF JOKER',
    members: [
      { name: 'Inferno', image: '/inferno.jpg' },
      { name: 'Xelifer', image: '/xilefer.jpg' },
      { name: 'Sourus', image: '/.jpg' },
    ],
  },
];

const Teams: React.FC = () => {
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
          
          {/* Show dropdown menu only on mobile */}
          <div className="md:hidden relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
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
          </div>

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
      </nav>

      {/* Add a spacer div when dropdown is open */}
      {isDropdownOpen && <div className="h-48" />} {/* Adjust height as needed */}

      <div className="container mx-auto py-10">
        <h1 className="mt-1 text-6xl font-bold mb-8 text-center text-white">MAIN HANDLERS OF JOKER</h1>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            {/* Category Title */}
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">{category.title}</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {category.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-80 relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 rounded-lg opacity-50 bg-yellow-500 blur-lg transition-opacity hover:opacity-75"></div>

                  {/* Member Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128} // Set the width of the image
                    height={128} // Set the height of the image
                    className="relative z-10 mb-4 object-cover border-4 border-yellow-500 rounded-lg"
                  />
                  {/* Member Name */}
                  <h3 className="relative z-10 text-xl font-bold text-white">{member.name}</h3>
                  {/* Member's Category */}
                  {/* Add more info if needed */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 w-full p-8 bg-gray-900 text-center">
        <p>&copy; 2024 Joker Club. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Teams;
