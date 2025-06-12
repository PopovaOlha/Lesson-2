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
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
          🔐 Login Form
        </h2>

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
          className="w-full py-3 mt-4 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 transition font-semibold text-lg shadow-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task1;
