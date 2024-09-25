'use client';

import Image from 'next/image'; // Importing the Image component from Next.js

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
      { name: 'Atif', image: '/atif.png' },
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
      { name: 'Sourus', image: '/.jpg ' },
    ],
  },
];

const MemberCategory: React.FC = () => {
  return (
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
                <p className="relative z-10 text-gray-400">Member of {category.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberCategory;
