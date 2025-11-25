import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop + container.clientHeight / 2;
      setIsScrolled(container.scrollTop > 20);

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) setActiveSection(id);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const container = document.querySelector(".scroll-container");
    const section = document.getElementById(id);
    if (container && section) {
      container.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/10 dark:bg-gray-900/30 transition-all duration-300"
      animate={{
        height: isScrolled ? 60 : 80,
        boxShadow: isScrolled
          ? "0 10px 30px rgba(0,0,0,0.2)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-center items-center px-6 h-full">
        
        {/* DESKTOP NAV — CENTERED */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-2 py-1 text-lg font-semibold text-white transition-all hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400/20 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden absolute right-6">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX size={28} className="text-white" />
            ) : (
              <HiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-6 bg-white/10 backdrop-blur-3xl p-10 rounded-3xl shadow-2xl">
              {links.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-3xl font-bold transition-colors ${
                      activeSection === link.id
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
