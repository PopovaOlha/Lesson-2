import { InputFieldProps } from '../interfaces';

const InputField = ({
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-purple-800 dark:text-purple-200 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border border-pink-200 dark:border-purple-500 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />
    </div>
  );
};

export default InputField;
