import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent backdrop-filter backdrop-blur-lg shadow-md">
      <h1 className="text-3xl font-bold text-white">Joker Club</h1>
      <div className="space-x-6">
        <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
        <Link href="/about" className="text-white hover:text-yellow-300 transition">About Us</Link>
        <Link href="/teams" className="text-white hover:text-yellow-300 transition">Our Teams</Link>
        <Link href="/servers" className="text-white hover:text-yellow-300 transition">Servers</Link>
        <Link href="/testimonials" className="text-white hover:text-yellow-300 transition">Testimonials</Link>
        <Link href="/events" className="text-white hover:text-yellow-300 transition">Events</Link>
        <Link href="/simulations" className="text-white hover:text-yellow-300 transition">Events</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
