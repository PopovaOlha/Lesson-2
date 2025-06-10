import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[#f6e5e5] font-sans">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#352961] mb-8 tracking-tight">
          📘 My React Tasks
        </h1>

        <nav className="space-y-4">
          <Link
            to="./Task1"
            className="block rounded-xl p-5 bg-[#e6b2c6] text-[#352961] text-lg sm:text-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            🚍 Task 1: Passenger Calculator
          </Link>

          <Link
            to="/task2"
            className="block rounded-xl p-5 bg-[#774181] text-white text-lg sm:text-xl font-semibold shadow-md hover:brightness-110 transition"
          >
            📅 Task 2: Forest by Month
          </Link>
        </nav>

        <p className="text-center text-[#774181] text-sm mt-10">
          Built with 💙 by Olha
        </p>
      </div>
    </div>
  );
};

export default MainPage;
