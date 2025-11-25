import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillForm({ skill, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    level: "",
  });

  useEffect(() => {
    if (skill) {
      setForm({
        name: skill.name,
        level: skill.level,
      });
    }
  }, [skill]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...skill,
      ...form,
    });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.form
        className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 max-w-md w-full flex flex-col gap-6 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-white/80 hover:text-white font-bold text-xl transition-colors"
        >
          ×
        </button>

        <h3 className="text-3xl font-extrabold text-white mb-4 drop-shadow-md">
          {skill ? "Edit Skill" : "Add Skill"}
        </h3>

        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          required
        />

        <input
          type="text"
          name="level"
          placeholder="Skill Level (e.g., Beginner, Intermediate, Expert)"
          value={form.level}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl font-semibold shadow-xl text-white hover:scale-105 transform transition-all duration-300"
        >
          {skill ? "Update" : "Add"} Skill
        </button>
      </motion.form>
    </motion.div>
  );
}
