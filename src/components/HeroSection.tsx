"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const NAV_LINKS = [
  { label: "HOME", href: "#" },
  { label: "SOCIALS", href: "#socials" },
  { label: "MEDIA", href: "#media" },
  { label: "CONTACT", href: "#contact" },
];

const SOCIALS = [
  {
    label: "Facebook", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: "Instagram", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: "X", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
];

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};
const glitchText: Variants = {
  hidden: { opacity: 0, x: -30, skewX: -8 },
  show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const tickerText =
    "Creator of Digital Growth Systems • Designer of Graphics • Photographer • Musician • Reformed Christian • Father of Three • Web Designer • App Developer";

  return (
    <section className="relative w-full h-screen overflow-hidden hero-bg hero-scanline">
      {/* Noise overlay */}
      <div className="absolute inset-0 hero-noise pointer-events-none z-[1]" />

      {/* ── Foreground photo: highest z so it's IN FRONT of ticker ── */}
      <motion.div
        className="absolute right-0 bottom-0 h-[75%] md:h-[90%] lg:h-[105%] w-auto pointer-events-none select-none z-30"
        variants={scaleIn}
        initial="hidden"
        animate="show"
      >
        <img
          src="/images/hero-foreground.png"
          alt="Kiefer Likens"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* ── Content wrapper ── */}
      <motion.div
        className="relative z-10 flex flex-col h-full"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* ══════ HAMBURGER + PILL NAV ══════ */}
        <motion.nav className="px-6 md:px-12 pt-6 md:pt-8 flex items-start gap-4 relative z-40" variants={fadeUp}>
          <button
            id="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex flex-col items-center justify-center w-12 h-12 gap-[6px] cursor-pointer shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block w-8 h-[3px] bg-white rounded-full origin-center"
              animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="block w-6 h-[3px] bg-white/70 rounded-full origin-center"
              animate={menuOpen ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-8 h-[3px] bg-white rounded-full origin-center"
              animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center bg-amber-gold/85 backdrop-blur-sm rounded-3xl md:rounded-full px-2 py-1.5 gap-1 shadow-lg shadow-black/20 border border-amber-gold-light/30 max-w-[calc(100vw-6rem)] md:max-w-none"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="font-sans font-semibold text-hero-orange-deep text-sm md:text-base uppercase tracking-wide px-4 md:px-5 py-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="hidden md:block w-px h-6 bg-hero-orange-deep/30 mx-1" />
                <div className="w-full h-px bg-hero-orange-deep/30 my-1 md:hidden" />
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-hero-orange-deep/80 hover:text-hero-orange-deep p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* ══════ HERO CONTENT ══════ */}
        <div className="flex-1 flex items-center relative">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <motion.p
              className="font-marker text-amber-gold-light text-xl md:text-2xl mb-2 tracking-wider"
              variants={fadeRight}
            >
              SUP?
            </motion.p>

            <motion.h1
              className="font-display font-black text-white uppercase leading-[0.9] tracking-tight"
              variants={glitchText}
            >
              <span className="block text-[clamp(2rem,8vw,7rem)]">I&rsquo;M A DIGITAL</span>
              <span className="block text-[clamp(2rem,8vw,7rem)]">JACK OF</span>
              <span className="block text-[clamp(2rem,8vw,7rem)]">ALL TRADES</span>
            </motion.h1>

            {/* ══════ TICKER — between headline and subtitle, BEHIND photo (z-20) ══════ */}
            <motion.div
              className="relative z-20 w-screen -ml-6 md:-ml-12 lg:-ml-20 bg-amber-gold/90 py-4 md:py-5 overflow-hidden mt-6"
              variants={fadeUp}
            >
              <div className="ticker-track">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="font-display font-bold text-hero-orange-deep text-lg md:text-xl lg:text-2xl uppercase tracking-[0.15em] whitespace-nowrap px-6"
                  >
                    {tickerText} &nbsp;•&nbsp;{" "}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p
              className="mt-6 font-marker text-white/70 text-lg md:text-xl max-w-lg tracking-wide"
              variants={fadeUp}
            >
              Also I am a Reformed Christian Pastor.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
