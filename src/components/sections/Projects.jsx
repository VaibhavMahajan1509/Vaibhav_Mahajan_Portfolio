import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { featuredProject, projects } from "../../data/projects";


function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <SectionHeader
        badge="Selected Projects"
        title="Building Real-World Web Applications"
        subtitle="Full-stack projects focused on clean UI, secure APIs, authentication, dashboards, and AI-powered features."
      />

      <div className="relative mx-auto max-w-7xl">
        <FeaturedProject />

        <div className="my-14 flex items-center justify-center gap-5">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-400/60" />
          <p className="text-lg font-bold text-white">More Projects</p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-400/60" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl font-black text-white">
                Interested in working together?
              </h3>
              <p className="mt-3 text-slate-400">
                I am open to React.js, MERN stack internships, fresher roles, and frontend opportunities.
              </p>
            </div>

            <a href="#contact" className="primary-btn">
              Contact Me
              <HiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-[#06111f]/90 p-6 shadow-[0_0_80px_rgba(34,211,238,0.13)] backdrop-blur-xl lg:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[130px]" />

      <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold uppercase tracking-wide text-cyan-300">
            {featuredProject.label}
          </span>

          <h3 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            {featuredProject.title}
          </h3>

          <p className="mt-3 text-xl font-semibold text-cyan-300">
            {featuredProject.tagline}
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {featuredProject.description}
          </p>

          <div className="mt-7 grid gap-4">
            {featuredProject.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <TechStack stack={featuredProject.stack} />

          <ProjectButtons
            live={featuredProject.live}
            github={featuredProject.github}
          />
        </div>

        <LaptopPreview
          title={featuredProject.title}
          image={featuredProject.image}
          featured
        />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <LaptopPreview title={project.title} image={project.image} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-300">
            {project.label}
          </span>

          <span className="h-2 w-2 rounded-full bg-purple-400" />
        </div>

        <h3 className="mt-5 text-3xl font-black text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <TechStack stack={project.stack} />

        <ProjectButtons live={project.live} github={project.github} small />
      </div>
    </motion.div>
  );
}

function LaptopPreview({ title, image, featured }) {
  return (
    <div className="relative">
      <div
        className={`relative mx-auto overflow-hidden rounded-t-[1.3rem] border-[8px] border-[#111827] bg-black shadow-2xl ${
          featured ? "max-w-3xl" : "max-w-md"
        }`}
      >
        <div className="absolute left-1/2 top-0 z-20 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-[#111827]" />

        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className={`w-full object-cover object-top transition duration-700 hover:scale-105 ${
              featured ? "h-[390px]" : "h-[210px]"
            }`}
          />
        ) : (
          <div
            className={`flex items-center justify-center bg-[#050b18] ${
              featured ? "h-[390px]" : "h-[210px]"
            }`}
          >
            <p className="text-slate-400">Add project screenshot</p>
          </div>
        )}
      </div>

      <div
        className={`mx-auto h-4 rounded-b-[2rem] bg-gradient-to-r from-slate-700 via-slate-300 to-slate-700 ${
          featured ? "max-w-4xl" : "max-w-lg"
        }`}
      />

      <div className="mx-auto h-2 max-w-[80%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-md" />
    </div>
  );
}

function TechStack({ stack }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectButtons({ live, github, small }) {
  return (
    <div className={`flex flex-wrap gap-3 ${small ? "mt-6" : "mt-8"}`}>
      <a href={live} className="primary-btn !px-5 !py-3 text-sm">
        Live Demo
        <HiOutlineExternalLink size={18} />
      </a>

      <a href={github} className="secondary-btn !px-5 !py-3 text-sm">
        GitHub
        <FaGithub />
      </a>
    </div>
  );
}

export default Projects;