import { useState } from 'react';
import InputField from '../components/InputField';
import {
  ERROR_IVAN,
  ERROR_OTHER,
  SUCCESS,
  VALID_LOGIN,
  VALID_PASSWORD,
} from '../constants';
import { Link } from 'react-router-dom';

const Task1 = () => {
  const [form, setForm] = useState({ login: '', password: '' });
  const [feedback, setFeedback] = useState({ message: '', color: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.login === VALID_LOGIN && form.password === VALID_PASSWORD) {
      setFeedback(SUCCESS);
    } else {
      setFeedback(form.login === VALID_LOGIN ? ERROR_IVAN : ERROR_OTHER);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-pink-100 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Link
        to="/"
        className="pb-4 text-purple-500 hover:text-purple-700 transition"
      >
        Back
      </Link>
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
          🔐 Login Form
        </h1>

        {feedback.message && (
          <p
            className="text-center font-semibold text-lg transition"
            style={{ color: feedback.color }}
          >
            {feedback.message}
          </p>
        )}

        <InputField
          label="Login"
          type="text"
          name="login"
          value={form.login}
          onChange={handleChange}
          placeholder="Type your name..."
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="•••••••"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 py-3 rounded-xl text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-lg font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task1;
