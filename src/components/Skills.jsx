import { useState, useEffect, useContext } from "react";
import SkillForm from "./SkillForm";
import { AdminContext } from "../context/AdminContext";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const isAdmin = useContext(AdminContext);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  const handleAddSkill = () => {
    setEditingSkill(null);
    setIsFormOpen(true);
  };

  const handleEditSkill = (skill) => {
    setEditingSkill(skill);
    setIsFormOpen(true);
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  const handleFormSubmit = (skill) => {
    if (editingSkill) {
      setSkills(skills.map((s) => (s.id === skill.id ? skill : s)));
    } else {
      const newId = Math.max(0, ...skills.map((s) => s.id)) + 1;
      setSkills([...skills, { ...skill, id: newId }]);
    }
    setIsFormOpen(false);
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900/10 p-6 snap-start"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-white drop-shadow-lg">
        Skills
      </h2>

      {isAdmin && (
        <button
          onClick={handleAddSkill}
          className="mb-10 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl hover:scale-105 transform transition-all"
        >
          Add Skill
        </button>
      )}

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-7xl">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative glass-card p-6 rounded-3xl shadow-2xl backdrop-blur-3xl border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">
              {skill.name}
            </h3>
            <p className="text-white/90 mb-4">{skill.level}</p>

            {isAdmin && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEditSkill(skill)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isAdmin && isFormOpen && (
        <SkillForm
          skill={editingSkill}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </section>
  );
}
