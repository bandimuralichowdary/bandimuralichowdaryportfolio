import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectForm({ project, onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    github: "",
    live: "",
    documentation: "",
  });

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title,
        description: project.description,
        skills: project.skills.join(", "),
        github: project.github || "",
        live: project.live || "",
        documentation: project.documentation || "",
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedProject = {
      ...project,
      ...form,
      skills: form.skills.split(",").map(s => s.trim()).filter(s => s),
    };
    onSubmit(processedProject);
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
        className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 max-w-lg w-full flex flex-col gap-6 shadow-2xl"
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
          {project ? "Edit Project" : "Add Project"}
        </h3>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          rows="4"
          value={form.description}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          required
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={form.github}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <input
          type="url"
          name="live"
          placeholder="Live Project URL"
          value={form.live}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <input
          type="url"
          name="documentation"
          placeholder="Documentation URL"
          value={form.documentation}
          onChange={handleChange}
          className="p-4 rounded-xl border border-white/30 bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl font-semibold shadow-xl text-white hover:scale-105 transform transition-all duration-300"
        >
          {project ? "Update" : "Add"} Project
        </button>
      </motion.form>
    </motion.div>
  );
}
