const EventsPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-black p-8">
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
