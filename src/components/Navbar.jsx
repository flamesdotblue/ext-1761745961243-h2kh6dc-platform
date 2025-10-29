import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 group-hover:scale-110 transition-transform">
            <Rocket size={18} />
          </div>
          <span className="text-sm font-semibold tracking-wide uppercase text-white/90">Nova Web Design</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
          <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black hover:bg-white/90 transition">
            Start a project
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 border border-white/10 text-white/80 hover:bg-white/5">
          Menu
        </button>
      </div>
    </header>
  );
}
