'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';

const EventsPage: React.FC = () => {
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
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Joker Club</div>
          <div className="relative flex items-center">
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

            {/* Mobile Dropdown Menu */}
            <button onClick={toggleDropdown} className="flex items-center md:hidden focus:outline-none">
              <span>Menu</span>
              <FaCaretDown className="ml-2" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 bg-gray-800 shadow-lg rounded-lg mt-2 p-4 z-20 md:hidden">
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
        </div>
      </nav>

      {/* Add a spacer div when dropdown is open */}
      {isDropdownOpen && <div className="h-48" />} {/* Adjust height as needed */}

      {/* Page Heading */}
      <section className="mb-12 text-center max-w-3xl mt-24">
        <h2 className="text-5xl font-bold">Upcoming Events</h2>
        <p className="mt-4 text-lg text-gray-300">
          Join us for exciting events and activities! Check out what&apos;s happening in our community:
        </p>
      </section>

      {/* Events List */}
      <section className="mt-12 w-full max-w-4xl">
        <ul className="text-center space-y-4">
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">🎮 Game Night</h3>
            <p>Every Friday at 7 PM</p>
          </li>
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">🎨 Art Contest</h3>
            <p>Last Saturday of the month</p>
          </li>
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">💬 Community Chat</h3>
            <p>Wednesdays at 6 PM</p>
          </li>
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">📺 Streaming Party</h3>
            <p>Every Saturday at 8 PM</p>
          </li>
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">🎉 Monthly Meetup</h3>
            <p>First Sunday of every month at 5 PM</p>
          </li>
          <li className="bg-gray-900 rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">🔍 Raiding Sessions</h3>
            <p>Tuesdays at 8 PM</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default EventsPage;
