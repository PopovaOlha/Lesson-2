import { useState } from 'react';
import {
  CLASS_BUSINESS,
  CLASS_ECONOMY,
  TICKET_OPTIONS,
  BACKGROUND_IMAGES,
  BUSINESS_OPTIONS,
  ECONOMY_OPTIONS,
} from '../constants';
import { Link } from 'react-router-dom';

const Task2 = () => {
  const [ticketClass, setTicketClass] = useState('');
  const [options, setOptions] = useState({
    newspaper: false,
    cognac: false,
    snack: false,
    beer: '',
    chips: false,
  });

  const handleOptionChange = (key: string, value: boolean | string) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#f6e5e5] to-[#fff8f8] dark:from-[#1e1e2f] dark:to-[#2b2b40] font-sans">
      <div
        className="min-h-screen flex flex-col  items-center justify-center px-6 py-10 bg-cover bg-center transition-colors"
        style={{
          backgroundImage: ticketClass
            ? `url(${BACKGROUND_IMAGES[ticketClass as keyof typeof BACKGROUND_IMAGES]})`
            : 'none',
        }}
      >
        <Link
          to="/"
          className="pb-4 text-purple-500 hover:text-purple-700 transition"
        >
          Back
        </Link>
        <div className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6 backdrop-blur-md bg-opacity-90 dark:bg-opacity-80">
          <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300">
            🛫 Airline Class Selector
          </h2>

          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Choose your class
          </label>
          <select
            value={ticketClass}
            onChange={(e) => {
              setTicketClass(e.target.value);
              setOptions({
                newspaper: false,
                cognac: false,
                snack: false,
                beer: '',
                chips: false,
              });
            }}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {TICKET_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>

          {ticketClass === CLASS_BUSINESS && (
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  checked={options.newspaper}
                  onChange={() =>
                    handleOptionChange('newspaper', !options.newspaper)
                  }
                />
                Newspaper {BUSINESS_OPTIONS.newspapers}
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  checked={options.cognac}
                  onChange={() => handleOptionChange('cognac', !options.cognac)}
                />
                Drink {BUSINESS_OPTIONS.drinks}
              </label>

              {options.cognac && (
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                  <input
                    type="checkbox"
                    checked={options.snack}
                    onChange={() => handleOptionChange('snack', !options.snack)}
                  />
                  Snack? {BUSINESS_OPTIONS.snacks}
                </label>
              )}
            </div>
          )}

          {ticketClass === CLASS_ECONOMY && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Choose beer 🍺
                <select
                  value={options.beer}
                  onChange={(e) => handleOptionChange('beer', e.target.value)}
                  className="mt-2 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="">-- Select Beer --</option>
                  {ECONOMY_OPTIONS.beers.map((beer) => (
                    <option key={beer} value={beer}>
                      {beer}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  checked={options.chips}
                  onChange={() => handleOptionChange('chips', !options.chips)}
                />
                Chips {ECONOMY_OPTIONS.chips}
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task2;
