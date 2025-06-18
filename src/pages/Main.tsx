import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2b2d31] text-white font-sans px-4 py-10">
      <div className="w-full max-w-2xl bg-[#313338] rounded-3xl shadow-2xl p-10 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#5865F2] tracking-tight">
            React Projects Hub
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Interactive tasks built with React & Tailwind 💻
          </p>
        </div>

        <nav className="space-y-4">
          <Link
            to="/task1"
            className="block w-full bg-[#40444b] hover:bg-[#5865f2] hover:text-white text-left text-sm sm:text-base px-6 py-4 rounded-xl transition font-medium"
          >
            👥🎯 Competition Participant Selector
          </Link>

          <Link
            to="/task2"
            className="block w-full bg-[#40444b] hover:bg-[#5865f2] hover:text-white text-left text-sm sm:text-base px-6 py-4 rounded-xl transition font-medium"
          >
            🕺💃 Dance Pair Maker
          </Link>

          <Link
            to="/task3"
            className="block w-full bg-[#40444b] hover:bg-[#5865f2] hover:text-white text-left text-sm sm:text-base px-6 py-4 rounded-xl transition font-medium"
          >
            🔍👨‍💼 Employee Finder
          </Link>
        </nav>
        <p className="text-center text-sm text-gray-500 pt-4 border-t border-gray-700">
          Built with ⚛️ by Olha • Inspired by Discord
        </p>
      </div>
    </div>
  );
};

export default MainPage;
