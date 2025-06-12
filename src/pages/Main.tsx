import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#f6e5e5] to-[#fff8f8] dark:from-[#1e1e2f] dark:to-[#2b2b40] font-sans">
      <div className="w-full max-w-xl bg-white dark:bg-[#2f2f44] rounded-3xl shadow-2xl p-8 sm:p-10 text-center transition-colors">
        <h1 className="text-3xl sm:text-5xl font-bold  text-purple-700 dark:text-purple-300 mb-8 tracking-tight">
          📘 My React Tasks
        </h1>

        <nav className="space-y-4">
          <Link
            to="/task1"
            className="block rounded-xl p-5 bg-[#e6b2c6] dark:bg-[#a34a74]  text-gray-800 dark:text-white text-lg sm:text-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            🎯🔐 Conditional Login Feedback
          </Link>

          <Link
            to="/task2"
            className="block rounded-xl p-5 bg-[#774181] dark:bg-[#5e3466]  text-gray-800 dark:text-white text-lg sm:text-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            🛫🍷 Airline Class Selector
          </Link>

          <Link
            to="/task3"
            className="block rounded-xl p-5 bg-[#e6b2c6] dark:bg-[#a34a74]  text-gray-800 dark:text-white text-lg sm:text-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            💼💰 Employee Salary List
          </Link>
        </nav>

        <p className="text-center text-[#774181] dark:text-[#bfa0d6] text-sm mt-10">
          Built with 💙 by Olha
        </p>
      </div>
    </div>
  );
};

export default MainPage;
