'use client'

import Link from 'next/link';
import { useState } from 'react';

const ServersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
      {/* Page Heading */}
      <section className="mt-14 mb-12 text-center max-w-3xl">
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
                    Join {server.name}
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-300">No servers found.</p>
          )}
        </section>
      </div>

      {/* FAQ Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        <div className="mt-4 space-y-2">
          <p className="text-gray-300">
            <strong>1. How do I join a server?</strong>
            <br />
            Click on the &quot;Join&quot; button for the server you want to join, and you&apos;ll be redirected to Discord.
          </p>
          <p className="text-gray-300">
            <strong>2. What do I need to join?</strong>
            <br />
            You&apos;ll need a Discord account. If you don&apos;t have one, you can create it for free.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ServersPage;
