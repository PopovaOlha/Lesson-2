import { useState } from 'react';
import InputField from '../components/InputField';
import { vocabularyItems } from '../data';
import { CORRECT_FEEDBACK, INCORRECT_FEEDBACK } from '../constants';
import { Link } from 'react-router-dom';

const Task3 = () => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  const current = vocabularyItems[index];

  const handleCheck = () => {
    const isValid = value.trim().toLowerCase() === current.wordUa.toLowerCase();
    setIsCorrect(isValid);
    setFeedback(isValid ? CORRECT_FEEDBACK : INCORRECT_FEEDBACK);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % vocabularyItems.length);
      setValue('');
      setFeedback('');
      setIsCorrect(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col  items-center justify-center px-6 py-10 bg-gradient-to-br from-[#f6e5e5] to-[#fff8f8] dark:from-[#1e1e2f] dark:to-[#2b2b40] font-sans">
      <Link
        to="/"
        className="pb-4 text-purple-500 hover:text-purple-700 transition"
      >
        Back
      </Link>
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6 text-center">
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
          🎯 Vocabulary Trainer
        </h2>
        <div
          className={`text-6xl p-4 rounded-2xl inline-block transition-all duration-300 ${
            isCorrect === null
              ? ''
              : isCorrect
                ? 'border-4 border-green-500'
                : 'border-4 border-red-500'
          }`}
        >
          {current.emoji}
        </div>
        <p className="text-xl font-semibold text-gray-700 dark:text-white">
          <span className="italic">{current.wordEn}</span>
        </p>

        <InputField
          label="Your Translation"
          type="text"
          name="translation"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type in Ukrainian..."
        />

        <button
          onClick={handleCheck}
          className="w-full py-3 mt-4 rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 transition font-semibold text-lg shadow-md"
        >
          ✅ Check
        </button>

        {feedback && (
          <p
            className={`text-lg font-medium transition-all duration-300 ${
              isCorrect ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default Task3;
