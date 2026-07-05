import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import SectionHeader from "../ui/SectionHeader";

const profileInfo = [
  {
    label: "Location",
    value: "Indore, India",
    icon: HiOutlineLocationMarker,
  },
  {
    label: "Looking For",
    value: "React.js / MERN Opportunity",
    icon: HiOutlineBriefcase,
  },
  {
    label: "Education",
    value: "MCA 2025",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "Availability",
    value: "Immediate",
    icon: HiOutlineMail,
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Medicaps University",
    location: "Indore, Madhya Pradesh",
    duration: "2023 – 2025",
    description:
      "Focused on software development, full-stack web technologies, databases, data structures, and modern application development.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Shri Vaishnav Institute of Management",
    location: "Indore, Madhya Pradesh",
    duration: "2020 – 2023",
    description:
      "Built a strong foundation in programming, web development, database management systems, and core computer science concepts.",
  },
];
function About() {
  return (
    <section id="about" className="relative overflow-hidden section-padding">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <SectionHeader
        badge="About"
        title="React.js & MERN Stack Developer"
        subtitle="I build responsive, user-focused web applications with clean interfaces, practical features, and full-stack functionality."
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Developer Profile
          </p>

          <h3 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">
            Vaibhav Mahajan
          </h3>

          <p className="mt-2 text-lg font-semibold text-cyan-300">
            MERN Stack Developer
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            I’m a MERN Stack Developer from Indore, India, focused on building
            modern web applications using React.js, Node.js, Express, MongoDB,
            and Tailwind CSS.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            I enjoy creating clean user interfaces, connecting frontend
            applications with backend APIs, implementing authentication,
            building dashboards, and turning project ideas into practical,
            deployable applications.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {profileInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-300">
                      <Icon />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="mt-1 font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Education
          </p>

          <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
            Academic Background
          </h3>

          <div className="mt-8 space-y-5">
            {education.map((item) => (
              <div
                key={item.degree}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="absolute right-5 top-5 text-5xl font-black text-white/[0.04]">
                  🎓
                </div>

                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  {item.duration}
                </span>

                <h4 className="mt-5 text-2xl font-black text-white">
                  {item.degree}
                </h4>

                <p className="mt-2 text-base font-semibold text-cyan-300">
                  {item.college}
                </p>

                <p className="mt-1 text-sm text-slate-500">{item.location}</p>

                <p className="mt-5 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
