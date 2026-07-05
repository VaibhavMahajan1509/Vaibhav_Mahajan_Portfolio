import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import MouseGlow from "./components/ui/MouseGlow";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <MouseGlow />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;