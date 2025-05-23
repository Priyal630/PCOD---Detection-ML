import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-pink-100 relative pt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Home Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-pink-600 px-4 py-2 rounded-full shadow hover:bg-pink-100 transition"
      >
        ← Home
      </Link>

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Login to PCOD Tracker</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-600 underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
