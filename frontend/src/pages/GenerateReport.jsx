import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Framer Motion added

export default function GenerateReport() {
  const report = {
    name: "Priyal Sharma",
    lastPeriod: "March 15, 2025",
    cycleLength: "28 days",
    symptoms: ["Irregular periods", "Hair fall", "Mood swings"],
    lifestyle: "Moderate activity, irregular sleep",
    suggestions: [
      "Consult a gynecologist",
      "Follow a healthy low-carb diet",
      "Include light exercises (yoga, walks)",
      "Track symptoms weekly",
    ],
  };

  return (
    <motion.div
      className="min-h-screen bg-pink-50 flex flex-col items-center p-6 relative pt-16"
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

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">📄 PCOD Health Report</h2>

        <div className="space-y-4 text-gray-800">
          <p><strong>👩 Name:</strong> {report.name}</p>
          <p><strong>📅 Last Period:</strong> {report.lastPeriod}</p>
          <p><strong>🔁 Cycle Length:</strong> {report.cycleLength}</p>
          <p><strong>🩺 Symptoms:</strong> {report.symptoms.join(", ")}</p>
          <p><strong>🏃 Lifestyle:</strong> {report.lifestyle}</p>

          <div>
            <strong>✅ Suggestions:</strong>
            <ul className="list-disc list-inside mt-2">
              {report.suggestions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

  