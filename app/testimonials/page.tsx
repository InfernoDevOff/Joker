"use client"; // Add this line to specify that this component is a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FaCaretDown } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'skull',
    message: 'Being a part of the Joker Club has been an amazing experience! I’ve met so many great friends.',
    rating: 5,
    photo: '/skull.jpg',
  },
  {
    name: 'Inferno',
    message: 'The events are well organized, and I love the community spirit!',
    rating: 4,
    photo: '/inferno.jpg',
  },
  {
    name: 'Wali',
    message: 'A fantastic place for gamers and creatives alike. Highly recommend!',
    rating: 5,
    photo: '/wali.png',
  },
];

const TestimonialsPage: React.FC = () => {
  const [newTestimonial, setNewTestimonial] = useState({ name: '', message: '', rating: '5' }); // Make rating a string to match select value
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', newTestimonial);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Joker Club</div>
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

      {isDropdownOpen && <div className="h-48" />}

      <section className="mb-12 text-center max-w-3xl mt-24">
        <h2 className="text-5xl font-bold">Testimonials</h2>
        <p className="mt-4 text-lg text-gray-300">
          Hear from our members about their experiences in the community!
        </p>
      </section>

      <section className="w-full max-w-4xl">
        <div className="flex overflow-x-scroll space-x-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg w-80 flex-shrink-0">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <div className="flex items-center justify-center mb-2">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-300">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Submit Your Testimonial</h3>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={newTestimonial.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={newTestimonial.message}
              onChange={handleInputChange}
              placeholder="Your Testimonial"
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mb-4">
            <select
              name="rating"
              value={newTestimonial.rating}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="mt-16 w-full p-8 bg-gray-900 text-center">
        <p>&copy; 2024 Joker Club. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default TestimonialsPage;
