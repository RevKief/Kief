"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_LINKS = [
  { label: "App Development", href: "#app-development" },
  { label: "Web Design", href: "#web-design" },
  { label: "Graphics", href: "#graphics" },
  { label: "AI Automations", href: "/ai-automations" },
];

const INFO_BULLETS = [
  "I'm jealous I don't have luscious hair.",
  "I am an avid supporter of the second amendment, less of a fan of the 19th.",
  "I abhor crocs but can appreciate their comfort.",
  "I wish women gave men engagement swords.",
  "I'm not confident enough to pull off pit vipers."
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function ServicesSection() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden services-gradient flex items-center">
      <div className="absolute inset-0 hero-noise pointer-events-none z-[1]" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-12 items-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* ══════ LEFT — IMAGE PUSHED LEFT ══════ */}
        <motion.div className="relative flex justify-start -ml-4 lg:-ml-10" variants={fadeUp}>
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-tr from-red-500 via-amber-400 to-red-600 scale-110" />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100 blur-3xl bg-gradient-to-bl from-yellow-300 via-red-500 to-orange-600 scale-125 animate-pulse" />

            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                rotate: -1,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <img 
                src="/images/services-character.png" 
                alt="Kiefer Character" 
                className="relative z-10 w-full h-auto drop-shadow-[20px_20px_0_rgba(0,0,0,0.5)] group-hover:drop-shadow-[30px_30px_0_rgba(0,0,0,0.8)] filter contrast-125 saturate-110 transition-all duration-500 pointer-events-auto"
              />

              <motion.button
                onClick={() => setInfoOpen(true)}
                className="absolute top-[8%] right-[12%] z-20 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white cursor-pointer hover:bg-white/40 transition-colors duration-200"
                whileHover={{ scale: 1.3, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 0px rgba(255,255,255,0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Character info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* ══════ RIGHT — BIGGER SERVICE LINKS ══════ */}
        <motion.div className="flex flex-col gap-2 md:gap-3" variants={stagger}>
          {SERVICE_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="group relative font-display font-black text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight leading-none py-4 block overflow-hidden"
              variants={fadeUp}
              whileHover={{ x: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute left-0 top-0 h-full w-1.5 bg-amber-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200 rounded-r-lg" />
              <span className="relative z-10 flex items-center gap-5">
                <span className="text-amber-400/50 text-base md:text-lg font-sans font-normal">0{i + 1}</span>
                <span className="group-hover:text-amber-300 transition-colors duration-200 group-hover:drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                  {link.label}
                </span>
                <svg
                  className="w-10 h-10 ml-auto opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-white/10 group-hover:bg-amber-400/40 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ══════ INDEX CARD MODAL ══════ */}
      <AnimatePresence>
        {infoOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInfoOpen(false)}
            />
            <motion.div
              className="fixed z-[100] top-1/2 left-1/2 w-[90vw] max-w-xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -3, y: "-45%", x: "-50%" }}
              animate={{ opacity: 1, scale: 1, rotate: 1.5, y: "-50%", x: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, rotate: 3, y: "-45%", x: "-50%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Index card */}
              <div className="index-card relative bg-[#fffef5] rounded-sm shadow-2xl shadow-black/40 overflow-hidden">
                {/* Red top line — like a real index card */}
                <div className="h-1.5 w-full bg-red-500" />

                {/* Ruled lines background */}
                <div className="relative px-8 md:px-10 pt-6 pb-8">
                  {/* Horizontal ruled lines */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 31px, #c8daf0 31px, #c8daf0 32px)",
                    backgroundPosition: "0 28px",
                  }} />
                  {/* Red margin line */}
                  <div className="absolute top-0 bottom-0 left-[72px] md:left-[80px] w-px bg-red-400/60 pointer-events-none" />

                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-4">
                    <div>
                      <p className="font-marker text-red-500/60 text-xs uppercase tracking-[0.3em]">Classified</p>
                      <h3 className="font-marker text-2xl md:text-3xl text-neutral-800 mt-1">
                        Intel Report
                      </h3>
                    </div>
                    <button
                      onClick={() => setInfoOpen(false)}
                      className="text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer mt-1"
                      aria-label="Close"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Body text — handwritten style on the lines */}
                  <ul className="relative font-marker text-neutral-700 text-base md:text-lg leading-[32px] tracking-wide list-disc pl-5 ml-2 marker:text-red-500/70">
                    {INFO_BULLETS.map((bullet, idx) => (
                      <li key={idx} className="pl-1">{bullet}</li>
                    ))}
                  </ul>

                  {/* Coffee ring stain for authenticity */}
                  <div className="absolute bottom-4 right-6 w-16 h-16 rounded-full border-[3px] border-amber-800/10 opacity-60 pointer-events-none" />
                  <div className="absolute bottom-6 right-8 w-12 h-12 rounded-full border-[2px] border-amber-800/8 opacity-40 pointer-events-none" />
                </div>

                {/* Tape effect at top */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-100/70 backdrop-blur-sm rotate-[0.5deg] rounded-sm shadow-sm" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
