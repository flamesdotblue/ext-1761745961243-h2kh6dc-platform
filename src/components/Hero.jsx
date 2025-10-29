import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.2]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      {/* Background gradient accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_60%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[100dvh]">
        {/* Content */}
        <motion.div
          className="py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ y: yParallax }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            I design & build modern, interactive web experiences.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Portfolio of a web designer focused on playful interactions, clean typography, and performance. Scroll to explore 3D, motion, and work highlights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-white/90 transition">
              View work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 hover:bg-white/5 transition">
              Get in touch
            </a>
          </div>

          {/* Mini About */}
          <div id="about" className="mt-10 grid grid-cols-2 gap-4 max-w-md">
            <Stat label="Years experience" value="6+" />
            <Stat label="Projects shipped" value="40+" />
            <Stat label="Avg. response" value="<24h" />
            <Stat label="Based in" value="Remote / EU" />
          </div>
        </motion.div>

        {/* Spline Scene */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
    </div>
  );
}
