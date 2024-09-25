'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { FaUsers, FaServer, FaQuestionCircle, FaQuoteLeft, FaLightbulb } from 'react-icons/fa';

export default function HomePage() {
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

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black overflow-hidden">
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <ul className="flex justify-center space-x-8">
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
            <li key={name}>
              <Link href={href} className="hover:underline transition">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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

      <section id="events" className="mt-16 w-full max-w-4xl p-8 bg-gray-900 rounded-lg">
        <h2 className="text-5xl font-bold text-center">Upcoming Events</h2>
        <ul className="mt-4 list-disc list-inside text-lg">
          <li>🎮 Game Night - Every Friday at 7 PM</li>
          <li>🎨 Art Contest - Last Saturday of the month</li>
          <li>💬 Community Chat - Wednesdays at 6 PM</li>
          <li>🎉 Monthly Hangout - First Saturday of each month</li>
        </ul>
      </section>

      <section id="faq" className="mt-16 w-full max-w-4xl p-8 bg-gray-800 rounded-lg">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-4">
          <h3 className="font-bold">Q: How do I join the server?</h3>
          <p>A: Click on the &quot;Join Now&quot; button in the hero section, and you&apos;ll be redirected to our Discord server!</p>
          <h3 className="font-bold mt-4">Q: Are there any membership fees?</h3>
          <p>A: No, our community is completely free to join!</p>
        </div>
      </section>

      <footer className="mt-16 p-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Joker Discord</h3>
            <p className="text-sm">
              We are a dedicated community of Joker fans, offering a fun, engaging, and supportive environment for people to meet, play games, and connect. Join us for exclusive events and a great community experience!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/teams" className="hover:underline">Our Teams</a></li>
              <li><a href="/servers" className="hover:underline">Servers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm">For any inquiries or support, please reach out to us at: <a href="mailto:support@jokerclub.com" className="hover:underline">support@jokerclub.com</a></p>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">© {new Date().getFullYear()} Joker Club. All rights reserved.</p>
      </footer>
    </main>
  );
}
