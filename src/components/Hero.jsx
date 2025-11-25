import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showResume, setShowResume] = useState(false);

  const fullText = "Bandi Mohana Sudha Murali Krishna";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 overflow-x-hidden overflow-y-auto">
      {/* Floating luxury shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-52 h-52 bg-white/10 rounded-full -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-36 -right-32 animate-pulse"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4"
      >
        {typedText}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl md:text-1xl text-white/90 drop-shadow-lg mb-12"
      >
        Frontend Developer | Machine Learning Enthusiast | Problem Solver
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="flex gap-6 z-10"
      >
        {/* New Resume Button */}
        <button
          onClick={() => setShowResume(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold rounded-2xl shadow-2xl transform transition-all hover:scale-105"
        >
          View Resume
        </button>

        <a
          href="#contact"
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-2xl shadow-2xl hover:bg-white hover:text-purple-700 transform transition-all hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {showResume && <ResumeModal close={() => setShowResume(false)} />}
    </section>
  );
}
