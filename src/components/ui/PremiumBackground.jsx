function PremiumBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.07)_1px,transparent_1px)] bg-[size:70px_70px] opacity-35" />

      <div className="absolute left-[45%] top-10 h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-[-160px] top-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="absolute bottom-[-220px] left-[-120px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_82%)]" />
    </div>
  );
}

export default PremiumBackground;