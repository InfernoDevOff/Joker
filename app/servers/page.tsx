'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const ServersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const servers = [
    {
      name: 'Joker Club',
      link: 'https://discord.gg/jokerop',
      description: 'The ultimate hangout spot for gamers and creative minds alike.',
      members: 120,
      category: 'Gaming',
    },
    {
      name: 'Headquarter',
      link: 'https://discord.gg/headquarter',
      description: 'Join the Headquarter for organized events and serious gaming sessions.',
      members: 200,
      category: 'Events',
    },
  ];

  // Filter servers based on search term
  const filteredServers = servers.filter(server =>
    server.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Joker Club</div>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
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

      {/* Page Heading */}
      <section className="mt-20 mb-12 text-center max-w-3xl">
        <h2 className="text-5xl font-bold text-white">Our Servers</h2>
        <p className="mt-4 text-lg text-gray-300">
          We offer multiple servers for various activities, including gaming and art. Join any of our communities below!
        </p>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a server..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 p-2 rounded-lg bg-gray-700 text-white w-full max-w-md"
        />
      </section>

      {/* Increased Spacing Under Header */}
      <div className="mt-10 w-full max-w-6xl">
        {/* Servers List */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServers.length > 0 ? (
            filteredServers.map((server, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-80 rounded-lg p-6 shadow-lg flex flex-col items-center text-center space-y-4 hover:bg-gray-800 transition-all"
              >
                {/* Server Name */}
                <h3 className="text-3xl font-semibold text-white">{server.name}</h3>
                {/* Server Description */}
                <p className="text-gray-300">{server.description}</p>
                {/* Members Count */}
                <p className="text-gray-400">Members: {server.members}</p>
                {/* Server Category */}
                <p className="text-gray-400">Category: {server.category}</p>
                {/* Join Server Button */}
                <Link href={server.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 mt-4 text-lg font-semibold bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-400 transition-all">
                    Join Now
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">No servers found.</p>
          )}
        </section>
      </div>

      <footer className="mt-16 w-full p-8 bg-gray-900 text-center">
        <p>&copy; 2024 Joker Club. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default ServersPage;
