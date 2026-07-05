function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {badge}
      </p>
      <h2 className="text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;