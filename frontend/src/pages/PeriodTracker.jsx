import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PeriodTracker() {
  const [lastDate, setLastDate] = useState("");
  const [predicted, setPredicted] = useState(null);

  const handlePredict = () => {
    if (lastDate) {
      const next = dayjs(lastDate).add(28, "day").format("DD MMMM YYYY");
      setPredicted(next);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 relative pt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-pink-600 px-4 py-2 rounded-full shadow hover:bg-pink-100 transition"
      >
        ← Home
      </Link>

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">📅 Period Tracker</h2>

        <label className="block text-gray-700 mb-2">Last Period Date:</label>
        <input
          type="date"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handlePredict}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Predict Next Period
        </button>

        {predicted && (
          <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded text-center">
            <p className="text-lg font-semibold text-pink-700">
              Your next expected period: <br />
              <span className="text-xl">{predicted}</span>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
