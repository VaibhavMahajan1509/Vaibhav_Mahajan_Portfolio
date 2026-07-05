import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineArrowUp } from "react-icons/hi";
import { links } from "../../constants/links";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-black tracking-tight">
            Vaibhav<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            MERN Stack Developer focused on creating modern, scalable and
            production-ready web applications with exceptional UI/UX and clean
            architecture.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="secondary-btn">
              Projects
            </a>

            <a href="#skills" className="secondary-btn">
              Skills
            </a>

            <a href="#about" className="secondary-btn">
              About
            </a>

            <a href="#contact" className="primary-btn">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold">Let's Connect</h3>

            <p className="mt-3 max-w-sm text-slate-400">
              I'm always open to discussing internship opportunities,
              collaborations, or exciting MERN Stack projects.
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href={`mailto:${links.email}`}
              className="social-icon"
            >
              <HiOutlineMail size={20} />
            </a>
          </div>

          {/* Right */}
          <a
            href="#"
            className="secondary-btn"
          >
            Back to Top
            <HiOutlineArrowUp size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-slate-300">
                Vaibhav Mahajan
              </span>
              . All Rights Reserved.
            </p>

            <p>
              Crafted with{" "}
              <span className="font-semibold text-cyan-300">React</span>,
              <span className="font-semibold text-cyan-300">
                {" "}
                Tailwind CSS
              </span>{" "}
              &{" "}
              <span className="font-semibold text-cyan-300">
                Framer Motion
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;