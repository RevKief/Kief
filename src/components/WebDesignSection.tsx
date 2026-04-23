"use client";

import { useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

const WEB_PROJECTS = [
  { name: "REFORMED BUSINESS ALLIANCE", url: "https://reformedbusinessalliance.com/", image: "/images/web-rba.png" },
  { name: "WHITE BOY SUMMER CIGARS", url: "https://www.whiteboysummercigars.com/", image: "/images/web-wbs.png" },
  { name: "DEUS VULT REBINDING", url: "https://www.deusvultrebinding.com/", image: "/images/web-dvr.png" },
  { name: "A TO Z PAVING", url: "https://atozpaving.com/", image: "/images/web-atoz.png" },
  { name: "CAPSTONE PROPERTY BUYERS", url: "https://capstonepropertybuyers.com/", image: "/images/web-capstone.png" },
  { name: "TRAILER PARTS PLUS", url: "https://trailerpartsplusfl.com/", image: "/images/web-tpp.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function WebDesignSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  // Smooth cursor tracking for the floating image preview
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset by half the image width/height to center it on cursor
    cursorX.set(e.clientX - 200); 
    cursorY.set(e.clientY - 150);
  };

  return (
    <section 
      id="web-design" 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen max-h-screen bg-black overflow-hidden py-8 flex flex-col cursor-crosshair"
    >
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-hero-orange-deep/20 to-black z-0 pointer-events-none" />

      {/* Floating Image Preview (Desktop Only) */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: hoveredIdx % 2 === 0 ? 4 : -4 
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ 
              x: cursorX, 
              y: cursorY, 
              position: 'fixed', 
              top: 0, 
              left: 0,
              zIndex: 100,
              pointerEvents: 'none'
            }}
            className="w-[400px] aspect-[4/3] rounded-xl overflow-hidden border-2 border-amber-gold shadow-[0_0_60px_rgba(212,160,23,0.8)] hidden lg:block"
          >
            <img 
              src={WEB_PROJECTS[hoveredIdx].image} 
              alt={WEB_PROJECTS[hoveredIdx].name}
              className="w-full h-full object-cover object-top scale-105"
            />
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-40 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container - Flex Column to fit viewport */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-between">
        
        {/* TOP: Section Title */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-amber-gold/20 pb-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-gold-light to-hero-orange text-5xl md:text-7xl uppercase tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(212,160,23,0.5)]">
            DIGITAL DOMINANCE
          </h2>
          <p className="font-marker text-white/70 mt-2 md:mt-0 text-xl tracking-widest rotate-[-2deg] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            "I don't do templates. I build digital real estate."
          </p>
        </motion.div>

        {/* MIDDLE: Tight List of Projects */}
        <motion.div 
          className="flex-1 flex flex-col justify-center gap-0 my-4 relative"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {WEB_PROJECTS.map((project, idx) => (
            <div key={project.name} className="relative">
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full py-3 lg:py-5 border-b border-amber-gold/10 last:border-0 hover:bg-amber-gold/5 transition-colors duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                variants={fadeUp}
              >
                {/* Content Wrapper */}
                <div className="relative z-10 flex items-center justify-between">
                  <h3 className="font-display font-black text-white text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none transition-all duration-300 group-hover:translate-x-4 md:group-hover:translate-x-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-gold-light group-hover:to-hero-orange group-hover:italic group-hover:skew-x-[-10deg] group-hover:drop-shadow-[0_0_20px_rgba(212,160,23,0.8)]">
                    {project.name}
                  </h3>
                  
                  <span className="font-mono text-hero-orange font-black opacity-0 group-hover:opacity-100 transition-all text-2xl lg:text-4xl drop-shadow-[0_0_15px_rgba(196,122,42,0.8)] hidden md:block group-hover:-translate-x-8 duration-300">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Crazy sliding background text on hover */}
                <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-0 group-hover:opacity-10 font-display font-black text-[100px] text-amber-gold pointer-events-none translate-y-10 group-hover:translate-y-0 transition-all duration-700 ease-out z-0">
                  WBS VIBES • WBS VIBES • WBS VIBES • WBS VIBES • WBS VIBES
                </div>
              </motion.a>
              
              {/* Mobile Image inline */}
              <div className="block lg:hidden w-full aspect-video mt-2 mb-4 overflow-hidden rounded-md border border-amber-gold/30 shadow-lg">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM: Slim CTA Banner */}
        <motion.div 
          className="w-full relative border-t-2 border-amber-gold/20 pt-4 md:pt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="relative border-2 border-amber-gold p-4 md:p-6 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(212,160,23,0.2)] hover:shadow-[0_0_50px_rgba(212,160,23,0.5)] transition-all duration-500 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-display font-black text-white text-2xl md:text-4xl uppercase tracking-tight mb-2 drop-shadow-[0_3px_0_rgba(212,160,23,0.8)]">
                Mog the competition.
              </h3>
              <p className="font-sans text-amber-gold-light text-sm md:text-base font-bold max-w-xl mx-auto md:mx-0 drop-shadow-[0_0_5px_rgba(232,184,48,0.3)]">
                Stop losing customers to mid-tier templates. We build custom web experiences with absolute Chad energy.
              </p>
            </div>

            <a 
              href="https://www.appalachiadigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-amber-gold text-hero-orange-deep font-black text-base md:text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group shadow-[0_0_20px_rgba(212,160,23,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,1)] flex-shrink-0"
            >
              <span>Appalachia Digital</span>
              <svg className="w-6 h-6 ml-3 text-hero-orange-deep group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500 group-hover:text-amber-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
