import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Ecommerce redesign with immersive product reveal and microinteractions.',
    tags: ['UI/UX', 'React', 'Animation'],
    color: 'from-fuchsia-500/20 to-violet-500/10',
  },
  {
    title: 'Orbit Labs',
    desc: 'R&D studio site with scroll-driven storytelling and 3D visuals.',
    tags: ['Framer Motion', '3D', 'Story'],
    color: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    title: 'Aurora SaaS',
    desc: 'Marketing site focused on performance and polished brand system.',
    tags: ['Design System', 'Next.js', 'Perf'],
    color: 'from-amber-500/20 to-rose-500/10',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected work</h2>
          <p className="mt-3 text-white/70">
            A snapshot of recent projects. I blend usability with playful motion to create memorable brand experiences.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags, color, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-40 group-hover:opacity-60 transition pointer-events-none`} />
      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="h-2 w-2 rounded-full bg-emerald-400/80 group-hover:scale-125 transition-transform" />
        </div>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md border border-white/10 bg-black/30 text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
      <TiltLayer />
    </motion.article>
  );
}

// Subtle 3D tilt using mouse position
function TiltLayer() {
  const [style, setStyle] = React.useState({});

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-py * 6).toFixed(2);
    const rotateY = (px * 6).toFixed(2);
    setStyle({ transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)` });
  }

  function onLeave() {
    setStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)' });
  }

  return (
    <div
      className="absolute inset-0"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(600px_circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.08),_transparent_40%)]" />
    </div>
  );
}
