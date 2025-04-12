import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Framer Motion import

export default function UploadPrescription() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      alert("Image uploaded successfully! (OCR coming soon 🔍🧠)");
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 relative pt-16"
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

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">📤 Upload Prescription</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="w-full rounded-lg shadow" />
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
        >
          Upload & Analyze (Soon)
        </button>
      </div>
    </motion.div>
  );
}
