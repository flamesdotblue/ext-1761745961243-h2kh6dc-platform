import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build something exceptional</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              From concepts to production-ready experiences. I can join your team or lead an end-to-end design & build.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@nova.design"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-white/90 transition"
              >
                <Mail size={16} /> hello@nova.design
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:bg-white/5 transition"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:bg-white/5 transition"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8"
          >
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div>
                  <div className="font-medium">Process</div>
                  <p className="text-white/70">Discovery, concept sketches, high-fidelity design, interactive prototypes, build, polish.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <div>
                  <div className="font-medium">Stack</div>
                  <p className="text-white/70">Figma, React, Framer Motion, Spline, Tailwind, Next.js.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                <div>
                  <div className="font-medium">Deliverables</div>
                  <p className="text-white/70">Design systems, component libraries, responsive web, performance optimization.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <Pill>Web Design</Pill>
              <Pill>UI/UX</Pill>
              <Pill>3D & Motion</Pill>
              <Pill>Frontend Dev</Pill>
              <Pill>Design Systems</Pill>
              <Pill>Brand</Pill>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <div className="px-3 py-2 rounded-md text-xs border border-white/10 bg-white/5 text-white/80 text-center">
      {children}
    </div>
  );
}
