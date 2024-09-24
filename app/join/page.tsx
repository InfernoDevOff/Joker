'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; // for animations

const JoinPage: React.FC = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    experience: '',
    portfolio: ''
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (role === '') {
      setMessage('Please select a role to proceed.');
    } else {
      window.open('https://discord.gg/jokerop', '_blank');
      setMessage('Redirecting to Discord...');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="mt-10 bg-black bg-opacity-90 shadow-2xl rounded-3xl p-10 max-w-3xl w-full space-y-8 relative overflow-hidden"
      >
        {/* Parallax Animation Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900 to-black opacity-30 z-0"></div>
        <h1 className="text-5xl font-extrabold text-center text-yellow-300 drop-shadow-lg">
          Join the Joker Club on Discord!
        </h1>
        <p className="text-lg text-gray-300 text-center">
          Be part of something bigger! Join the **Joker Club** and become a member of one of our amazing teams. Whether you love web development, marketing, raiding, or creating content, we have a spot for you.
        </p>

        {/* Why Join Us Section */}
        <div className="bg-gray-800 p-6 rounded-lg space-y-4 relative z-10">
          <motion.h2 className="text-4xl font-bold text-yellow-400 text-center" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            Why Join Us?
          </motion.h2>
          <ul className="list-disc list-inside text-gray-200 space-y-3 text-xl">
            <li>🎉 **Exclusive Community**: Get access to exclusive content, support, and teamwork opportunities.</li>
            <li>🚀 **Exciting Projects**: Work on creative projects that matter and push your skills to the next level.</li>
            <li>🎓 **Learn & Grow**: Access top-tier resources, mentorship, and collaboration opportunities.</li>
            <li>⚔️ **Raiding Team**: Take part in epic raids and strategies with the Joker Club.</li>
            <li>💻 **Web Dev Team**: Work on real-world projects in front-end, back-end, or fullstack roles.</li>
          </ul>
        </div>

        {/* Role Form */}
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* User Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-lg font-semibold">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-2 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Experience and Portfolio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="experience" className="text-lg font-semibold">Experience (years)</label>
              <input
                type="text"
                id="experience"
                name="experience"
                className="mt-2 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
                placeholder="Your experience level"
                value={formData.experience}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="portfolio" className="text-lg font-semibold">Portfolio Link</label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                className="mt-2 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
                placeholder="Link to your portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Team Selection */}
          <div className="flex flex-col">
            <label htmlFor="role" className="text-lg font-semibold">Choose a team to join:</label>
            <select
              id="role"
              name="role"
              className="mt-2 p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
              value={role}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select an option...</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="marketing">Marketing Team</option>
              <option value="youtube">Youtube Team</option>
              <option value="raiding">Raiding Team</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-300 rounded-lg font-bold text-gray-900 hover:bg-yellow-400 transition-colors mt-4"
          >
            Join Discord & Apply
          </button>
        </form>

        {message && <p className="mt-4 text-center">{message}</p>}

        {/* Discord Link */}
        <div className="text-center pt-8">
          <a
            href="https://discord.gg/jokerop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition-colors text-lg font-bold"
          >
            Or click here to directly join the Joker Club on Discord!
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default JoinPage;
