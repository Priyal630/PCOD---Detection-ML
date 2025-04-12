import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Framer Motion

const tips = [
  {
    phase: "Menstrual Phase",
    foods: ["Iron-rich spinach", "Dates", "Watermelon"],
    color: "bg-red-200",
  },
  {
    phase: "Follicular Phase",
    foods: ["Lean proteins", "Leafy greens", "Berries"],
    color: "bg-green-200",
  },
  {
    phase: "Ovulation Phase",
    foods: ["Zinc foods", "Nuts", "Pumpkin seeds"],
    color: "bg-yellow-200",
  },
  {
    phase: "Luteal Phase",
    foods: ["Magnesium foods", "Dark chocolate", "Herbal teas"],
    color: "bg-purple-200",
  },
];

export default function DietTips() {
  return (
    <motion.div
      className="min-h-screen bg-pink-50 flex flex-col items-center p-6 relative pt-16"
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

      <h2 className="text-3xl font-bold text-pink-600 mb-6">🥗 Diet Tips by Cycle Phase</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {tips.map((tip, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-lg ${tip.color}`}>
            <h3 className="text-xl font-bold mb-2">{tip.phase}</h3>
            <ul className="list-disc list-inside">
              {tip.foods.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
