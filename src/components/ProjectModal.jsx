import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card p-8 max-w-lg w-full rounded-3xl shadow-2xl relative backdrop-blur-3xl border border-white/20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white font-bold hover:text-red-400 transition-all"
        >
          X
        </button>
        <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-md">{project.title}</h3>
        <p className="mb-4 text-white/90">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <span key={i} className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm backdrop-blur-md">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-900 transition">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              Live
            </a>
          )}
          {project.documentation && (
            <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="text-white bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition">
              Docs
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
