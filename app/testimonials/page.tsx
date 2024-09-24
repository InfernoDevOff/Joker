'use client';

import { useState } from 'react';

const testimonialsData = [
  {
    name: 'skull',
    message: 'Being a part of the Joker Club has been an amazing experience! I’ve met so many great friends.',
    rating: 5,
    photo: '/skull.jpg', // Replace with actual photo path
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
  const [newTestimonial, setNewTestimonial] = useState({ name: '', message: '', rating: 5 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the submission logic here (e.g., send to an API or state management)
    console.log('Submitted:', newTestimonial);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
      {/* Page Heading */}
      <section className="mb-12 text-center max-w-3xl mt-24"> {/* Added mt-24 for spacing */}
        <h2 className="text-5xl font-bold">Testimonials</h2>
        <p className="mt-4 text-lg text-gray-300">
          Hear from our members about their experiences in the community!
        </p>
      </section>

      {/* Testimonials Carousel */}
      <section className="w-full max-w-4xl">
        <div className="flex overflow-x-scroll space-x-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg w-80 flex-shrink-0">
              <img src={testimonial.photo} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
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

      {/* Submit a Testimonial Form */}
      <section className="mt-12 w-full max-w-md">
        <h3 className="text-3xl font-bold text-center">Submit Your Testimonial</h3>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={newTestimonial.message}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
            required
          />
          <select
            name="rating"
            value={newTestimonial.rating}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <button type="submit" className="w-full px-4 py-2 font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-all">
            Submit
          </button>
          <h1>This Service is not working right now!</h1>
        </form>
      </section>
    </main>
  );
};

export default TestimonialsPage;
