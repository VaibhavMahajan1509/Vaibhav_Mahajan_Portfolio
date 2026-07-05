import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import SectionHeader from "../ui/SectionHeader";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building clean, responsive and interactive interfaces.",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive UI", icon: SiReact },
    ],
  },
  {
    title: "Backend",
    subtitle: "Creating APIs, authentication flow and server-side logic.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "Auth Flow", icon: SiNodedotjs },
    ],
  },
  {
    title: "Database & Tools",
    subtitle: "Working with data, version control and deployment tools.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <SectionHeader
        badge="Tech Stack"
        title="My Development Arsenal"
        subtitle="A practical MERN-focused stack I use to build responsive interfaces, APIs, databases, and deployment-ready applications."
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.15, duration: 0.6 }}
            className="glass-card group relative overflow-hidden rounded-[2rem] p-6"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70" />

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-[70px] transition group-hover:bg-purple-500/20" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                0{groupIndex + 1}
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {group.subtitle}
              </p>

              <div className="mt-8 grid gap-4">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                        <Icon />
                      </div>

                      <div>
                        <h4 className="font-bold text-white">{skill.name}</h4>
                        <p className="text-sm text-slate-500">
                          Practical project usage
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl">
        <div className="glass-card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Frontend Focus", "React + UI"],
              ["Backend Basics", "Node + Express"],
              ["Database", "MongoDB"],
              ["Goal", "Job Ready"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-xl font-black gradient-text">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;