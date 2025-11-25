import { useState, useEffect, useContext } from "react";
import ProjectModal from "./ProjectModal";
import ProjectForm from "./ProjectForm";
import { AdminContext } from "../context/AdminContext";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isAdmin = useContext(AdminContext);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to load projects:", err));
  }, []);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const handleAddProject = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleFormSubmit = (project) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      const newId = Math.max(0, ...projects.map((p) => p.id)) + 1;
      setProjects([...projects, { ...project, id: newId }]);
    }
    setIsFormOpen(false);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900/10 p-6 snap-start"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-white drop-shadow-lg">
        Projects
      </h2>

      {isAdmin && (
        <button
          onClick={handleAddProject}
          className="mb-10 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl hover:scale-105 transform transition-all"
        >
          Add Project
        </button>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative glass-card p-6 rounded-3xl shadow-2xl backdrop-blur-3xl border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-white/90 mb-4">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            {isAdmin && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEditProject(project)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            )}

            <button
              onClick={() => handleOpenModal(project)}
              className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}

      {isAdmin && isFormOpen && (
        <ProjectForm
          project={editingProject}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </section>
  );
}
