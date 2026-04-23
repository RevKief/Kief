"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

export default function AppDevSection() {
  return (
    <section id="app-development" className="relative w-full min-h-screen overflow-hidden bg-black flex items-center py-24">
      {/* Aggressive Outrun Sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 blur-[100px] opacity-30 pointer-events-none" />
      
      {/* Synthwave Grid floor */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] origin-bottom synthwave-grid pointer-events-none z-[1]" />
      
      {/* Heavy CRT scanlines overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] pointer-events-none z-[2] opacity-70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Text Content */}
        <motion.div 
          className="flex flex-col gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display font-black text-white text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none drop-shadow-[0_6px_0_rgba(220,38,38,1)]">
              APP<br/>DEV
            </h2>
            <div className="h-3 w-32 bg-amber-400 mt-6 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
            <p className="font-sans text-amber-400 tracking-[0.4em] uppercase text-sm md:text-base mt-6 font-black">
              Digital Solutions // 1984
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 relative">
            <h3 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight font-black uppercase tracking-tight relative z-10">
              A structure for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">
                sacred habits.
              </span>
            </h3>
          </motion.div>

          <motion.p variants={fadeUp} className="font-sans text-neutral-300 text-lg md:text-xl font-bold leading-relaxed max-w-xl border-l-4 border-red-500 pl-6 py-2 bg-gradient-to-r from-red-500/10 to-transparent">
            Family Worship helps households and individuals practice consistent, Scripture-centered worship without the noise of social networks.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4">
            <p className="font-marker text-amber-400 text-3xl md:text-4xl tracking-wider rotate-[-2deg] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Plus it's a FREE app!
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <a 
              href="https://www.familyworship.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-red-600 border-[3px] border-red-600 text-white font-black text-xl uppercase tracking-[0.2em] hover:bg-black hover:text-red-500 transition-all duration-300 group shadow-[0_0_30px_rgba(220,38,38,0.6)] rounded-sm"
            >
              <span>Get The App</span>
              <svg className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div 
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="relative z-10 w-full max-w-[300px] md:max-w-[400px]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            {/* Aggressive backglow */}
            <div className="absolute inset-0 bg-red-600 rounded-[3rem] blur-3xl opacity-50 animate-pulse" />
            
            <img 
              src="/images/family-worship-app.png" 
              alt="Family Worship App" 
              className="relative z-10 w-full h-auto drop-shadow-[20px_20px_0_rgba(220,38,38,0.5)] group-hover:drop-shadow-[30px_30px_0_rgba(220,38,38,0.8)] transition-all duration-500 filter contrast-[1.05] saturate-[1.1]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
