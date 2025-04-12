import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PeriodTracker from "./pages/PeriodTracker";
import SymptomChecker from "./pages/SymptomChecker";
import GenerateReport from "./pages/GenerateReport";
import DietTips from "./pages/DietTips";
import UploadPrescription from "./pages/UploadPrescription";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans text-white bg-pink-200 dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-purple-200 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400">PCOD Care 💗</h1>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="bg-white text-pink-600 px-4 py-2 rounded-xl font-semibold hover:bg-pink-100 dark:bg-gray-700 dark:text-pink-300 dark:hover:bg-gray-600 transition"
          >
            Login
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 flex items-center gap-2"
          >
            <span>{darkMode ? "☀️ Light" : "🌙 Dark"}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl font-bold mb-4 dark:text-white">Welcome to Your Health Dashboard</h2>
        <p className="text-lg mb-8 max-w-xl text-gray-700 dark:text-gray-300">
          Track your cycle, check PCOD symptoms, and get lifestyle tips customized just for you.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link
            to="/tracker"
            className="bg-white text-pink-600 py-4 px-6 rounded-2xl shadow hover:bg-pink-100 text-lg font-semibold dark:bg-gray-800 dark:text-pink-400 dark:hover:bg-gray-700 text-center"
          >
            📅 Track Period
          </Link>
          <Link
            to="/symptoms"
            className="bg-white text-pink-600 py-4 px-6 rounded-2xl shadow hover:bg-pink-100 text-lg font-semibold dark:bg-gray-800 dark:text-pink-400 dark:hover:bg-gray-700 text-center"
          >
            🩺 Symptom Checker
          </Link>
          <Link
            to="/report"
            className="bg-white text-pink-600 py-4 px-6 rounded-2xl shadow hover:bg-pink-100 text-lg font-semibold dark:bg-gray-800 dark:text-pink-400 dark:hover:bg-gray-700 text-center"
          >
            📄 Generate Report
          </Link>
          <Link
            to="/diet"
            className="bg-white text-pink-600 py-4 px-6 rounded-2xl shadow hover:bg-pink-100 text-lg font-semibold dark:bg-gray-800 dark:text-pink-400 dark:hover:bg-gray-700 text-center"
          >
            🥗 Diet Tips
          </Link>
          <Link
            to="/upload"
            className="bg-white text-pink-600 py-4 px-6 rounded-2xl shadow hover:bg-pink-100 text-lg font-semibold dark:bg-gray-800 dark:text-pink-400 dark:hover:bg-gray-700 text-center"
          >
            📤 Upload Prescription
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracker" element={<PeriodTracker />} />
        <Route path="/symptoms" element={<SymptomChecker />} />
        <Route path="/report" element={<GenerateReport />} />
        <Route path="/diet" element={<DietTips />} />
        <Route path="/upload" element={<UploadPrescription />} />
      </Routes>
    </Router>
  );
}
