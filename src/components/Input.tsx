const Input = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 text-left">
      <div>
        <label
          htmlFor="login"
          className="block text-sm font-semibold text-[#352961] mb-1"
        >
          Login
        </label>
        <input
          type="text"
          id="login"
          placeholder="Type your name..."
          className="w-full p-3 border border-[#e6b2c6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#774181] transition"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-[#352961] mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="•••••••"
          className="w-full p-3 border border-[#e6b2c6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#774181] transition"
        />
      </div>
    </div>
  );
};

export default Input;
