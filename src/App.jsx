// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { AdminProvider } from "./context/AdminContext";

function App() {
  return (
    <AdminProvider>
      <Navbar />
      <div className="scroll-container overflow-y-scroll scroll-smooth snap-y snap-mandatory h-screen overflow-x-hidden ">
        <div className="snap-start" id="hero"><Hero /></div>
        <div className="snap-start" id="projects"><Projects /></div>
        <div className="snap-start" id="skills"><Skills /></div>
        <div className="snap-start" id="contact"><Contact /></div>
      </div>
    </AdminProvider>
  );
}

export default App;
