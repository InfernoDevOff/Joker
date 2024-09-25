import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8 relative">
      {/* Navbar at the top */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent backdrop-filter backdrop-blur-lg shadow-md z-20">
        <h1 className="text-3xl font-bold text-white">Joker Club</h1>
        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition">About Us</Link>
          <Link href="/teams" className="text-white hover:text-yellow-300 transition">Our Teams</Link>
          <Link href="/servers" className="text-white hover:text-yellow-300 transition">Servers</Link>
          <Link href="/testimonials" className="text-white hover:text-yellow-300 transition">Testimonials</Link>
          <Link href="/events" className="text-white hover:text-yellow-300 transition">Events</Link>
        </div>
      </nav>

      {/* About Us Content */}
      <div className="relative z-10 text-center p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl mt-20 max-w-4xl">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">About Us</h2>
        <p className="mt-4 text-lg leading-relaxed animate-fade-in-up delay-150">
          Welcome to Joker Club, a community built around creativity, connection, and the spirit of the Joker.
          Our mission is to bring people together in a fun, engaging, and supportive environment, whether you’re a long-time fan or a newcomer.
        </p>

        <div className="mt-8">
          <h3 className="text-4xl font-semibold mt-10 mb-4 animate-fade-in-up delay-300">Our Mission</h3>
          <p className="text-lg leading-relaxed animate-fade-in-up delay-450">
            We aim to create a thriving community where members can express their creativity, share ideas, and build lasting friendships. 
            Whether it’s through games, events, or discussions, Joker Club is where the fun begins and the connections grow.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-4xl font-semibold mt-10 mb-6 animate-fade-in-up delay-600">Meet Our Team</h3>
          <ul className="mt-4 space-y-6 text-lg">
            <li className="p-4 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105">
              <strong>Owner:</strong> Skull and Matlabi
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105">
              <strong>Creator:</strong> Wali
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105">
              <strong>Management:</strong> Inferno
            </li>
            <li className="p-4 bg-gray-800 rounded-lg shadow-md transition transform hover:scale-105">
              <strong>Server Name:</strong> Joker
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link href="/join" className="inline-block bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition hover:bg-yellow-400 animate-fade-in-up delay-750">
            Join Us Today
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
