import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineArrowRight,
  HiOutlineDownload,
  HiOutlineSparkles,
} from "react-icons/hi";
import { motion } from "framer-motion";
import PremiumBackground from "../ui/PremiumBackground";
import HeroVisual from "../ui/HeroVisual";
import { links } from "../../constants/links";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32">
      <PremiumBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
            <HiOutlineSparkles />
            Available for React / MERN opportunities
          </div>

          
<h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.05em] md:text-7xl">
  Building Modern{" "}
  <span className="gradient-text">MERN Applications</span>{" "}
  with Clean UI & Scalable Solutions
  <span className="text-cyan-300">.</span>
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
  Hi, I'm <span className="font-semibold text-white">Vaibhav Mahajan</span>, a
  MERN Stack Developer passionate about building responsive, scalable, and
  user-focused web applications. I specialize in React, Node.js, Express, and
  MongoDB, creating production-ready applications with clean architecture,
  intuitive user experiences, and modern development practices.
</p>



          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-black shadow-xl shadow-white/10 transition hover:scale-105"
            >
              Explore Work
              <HiOutlineArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <HiOutlineDownload size={20} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              className="social-icon"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>

            <a
              className="social-icon"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>

            <a className="social-icon" href={`mailto:${links.email}`}>
              <HiOutlineMail size={21} />
            </a>

            <div className="ml-2 hidden h-10 w-px bg-white/10 sm:block" />
            <p className="hidden text-sm text-slate-400 sm:block">
              React • Node.js • MongoDB • Express
            </p>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
