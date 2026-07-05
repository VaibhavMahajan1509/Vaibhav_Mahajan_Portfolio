import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile-photo.jpeg";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-[580px] w-full max-w-[580px] items-center justify-center max-lg:mt-10 max-sm:h-[460px]"
    >
      <div className="absolute h-[500px] w-[500px] rounded-full bg-[conic-gradient(from_180deg,rgba(34,211,238,0.35),rgba(59,130,246,0.18),rgba(168,85,247,0.35),rgba(34,211,238,0.35))] blur-[75px] opacity-70 max-sm:h-[330px] max-sm:w-[330px]" />

      <div className="absolute h-[475px] w-[475px] rounded-full border border-cyan-300/20 max-sm:h-[330px] max-sm:w-[330px]" />
      <div className="absolute h-[395px] w-[395px] rounded-full border border-purple-300/20 max-sm:h-[275px] max-sm:w-[275px]" />
      <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-300/20 max-sm:h-[220px] max-sm:w-[220px]" />

      <div className="absolute h-[500px] w-[500px] animate-spin-slow rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,#22d3ee_60deg,transparent_120deg,transparent_220deg,#a855f7_280deg,transparent_340deg)] p-[2px] max-sm:h-[345px] max-sm:w-[345px]">
        <div className="h-full w-full rounded-full bg-[#020617]" />
      </div>

      <div className="absolute h-[405px] w-[405px] animate-reverse-spin rounded-full bg-[conic-gradient(from_240deg,transparent_0deg,#60a5fa_70deg,transparent_140deg,transparent_240deg,#c084fc_310deg,transparent_360deg)] p-[2px] max-sm:h-[285px] max-sm:w-[285px]">
        <div className="h-full w-full rounded-full bg-[#020617]" />
      </div>

      <OrbitDot className="right-20 top-20 bg-cyan-300 shadow-[0_0_30px_#22d3ee]" />
      <OrbitDot className="bottom-28 left-14 bg-purple-400 shadow-[0_0_30px_#a855f7]" />
      <OrbitDot className="bottom-16 right-28 bg-blue-400 shadow-[0_0_26px_#3b82f6]" />

      <FloatingIcon className="left-8 top-24 max-sm:left-2 max-sm:top-20" delay={0}>
        <SiReact />
      </FloatingIcon>

      <FloatingIcon className="right-8 top-32 max-sm:right-2 max-sm:top-28" delay={0.4}>
        <SiNodedotjs />
      </FloatingIcon>

      <FloatingIcon className="bottom-28 left-16 max-sm:bottom-24 max-sm:left-4" delay={0.8}>
        <SiMongodb />
      </FloatingIcon>

      <FloatingIcon className="bottom-36 right-12 max-sm:bottom-28 max-sm:right-4" delay={1.2}>
        <SiTailwindcss />
      </FloatingIcon>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-[320px] w-[320px] rounded-full bg-[linear-gradient(135deg,#22d3ee,#3b82f6,#a855f7)] p-[3px] shadow-[0_0_95px_rgba(34,211,238,0.28)] max-sm:h-[230px] max-sm:w-[230px]"
      >
        <div className="h-full w-full overflow-hidden rounded-full bg-[#020617] p-2">
          <img
            src={profileImage}
            alt="Vaibhav Mahajan"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="glass-card absolute bottom-6 z-20 rounded-2xl px-5 py-4 text-center max-sm:bottom-0"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Available For
        </p>
        <p className="mt-1 font-black text-cyan-300">React / MERN Roles</p>
      </motion.div>
    </motion.div>
  );
}

function OrbitDot({ className }) {
  return <span className={`absolute z-20 h-3 w-3 rounded-full ${className}`} />;
}

function FloatingIcon({ children, className, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`glass-card absolute z-20 grid h-16 w-16 place-items-center rounded-2xl text-3xl text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.12)] max-sm:h-12 max-sm:w-12 max-sm:text-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default HeroVisual;