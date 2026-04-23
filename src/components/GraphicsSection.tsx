"use client";

import { motion } from "framer-motion";

// Pre-selected high impact images from the graphics folder
const GRAPHIC_IMAGES = [
  { src: "/images/graphics/1689-coin.jpg", top: "5%", left: "5%", rotate: -12, size: "w-48 md:w-64" },
  { src: "/images/graphics/crown-of-ashes.jpg", top: "15%", left: "65%", rotate: 8, size: "w-64 md:w-80" },
  { src: "/images/graphics/hebrews.jpg", top: "50%", left: "5%", rotate: 15, size: "w-56 md:w-72" },
  { src: "/images/graphics/the-stormy-banks.jpg", top: "55%", left: "60%", rotate: -5, size: "w-72 md:w-96" },
  { src: "/images/graphics/wisdom-calls.jpg", top: "10%", left: "30%", rotate: 6, size: "w-56 md:w-72" },
  { src: "/images/graphics/joy-to-the-world.png", top: "70%", left: "25%", rotate: -14, size: "w-64 md:w-80" },
  { src: "/images/graphics/ag-resolutions-vol-1.jpg", top: "40%", left: "40%", rotate: 0, size: "w-48 md:w-64" },
  { src: "/images/graphics/verity.jpg", top: "80%", left: "75%", rotate: 10, size: "w-48 md:w-64" },
  { src: "/images/graphics/battle-cry.jpg", top: "25%", left: "85%", rotate: -18, size: "w-40 md:w-56" },
  { src: "/images/graphics/reformation-day.png", top: "75%", left: "5%", rotate: -8, size: "w-56 md:w-72" },
  { src: "/images/graphics/gloria-tnc.png", top: "35%", left: "15%", rotate: 12, size: "w-64 md:w-80" },
];

export default function GraphicsSection() {
  return (
    <section id="graphics" className="relative w-full min-h-screen bg-red-600 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background Dimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-600 to-black z-0 pointer-events-none" />

      {/* Dynamic Stacked Collage Background */}
      <div className="absolute inset-0 z-10 p-10">
        {GRAPHIC_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${img.size} shadow-2xl rounded-sm overflow-hidden border-4 border-black/80 cursor-crosshair`}
            style={{ top: img.top, left: img.left }}
            initial={{ rotate: img.rotate, scale: 1, opacity: 0.5, filter: "grayscale(50%) blur(2px)" }}
            whileHover={{ 
              scale: 1.15, 
              rotate: 0, 
              opacity: 1, 
              zIndex: 50,
              filter: "grayscale(0%) blur(0px)",
              boxShadow: "0px 0px 50px rgba(212,160,23,0.9)",
              borderColor: "#d4a017"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <img src={img.src} alt="Graphic Design" className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-amber-gold/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Overall Overlay to make text pop when not hovering over images */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-20 backdrop-blur-[2px]" />

      {/* Massive Scrolling Banner Foreground */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center pointer-events-none py-20">
        
        {/* Text 1: Moving Right */}
        <div className="w-[200vw] flex overflow-hidden whitespace-nowrap rotate-[-3deg] origin-center -mb-4 md:-mb-10 lg:-mb-16">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-50%", 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {Array(4).fill("BRANDING • CREDIBILITY • DIFFERENTIATION • CLARITY • ").map((text, i) => (
              <h2 
                key={i} 
                className="font-display font-black text-transparent text-[80px] md:text-[150px] lg:text-[220px] leading-none drop-shadow-[0_0_10px_rgba(0,0,0,1)]"
                style={{ WebkitTextStroke: '2px rgba(212, 160, 23, 0.8)' }}
              >
                {text}
              </h2>
            ))}
          </motion.div>
        </div>

        {/* Text 2: Moving Left */}
        <div className="w-[200vw] flex overflow-hidden whitespace-nowrap rotate-[2deg] origin-center -mb-4 md:-mb-10 lg:-mb-16">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {Array(4).fill("CONSISTENCY • CONVERSION • COMMUNICATION • ").map((text, i) => (
              <h2 
                key={i} 
                className="font-display font-black text-amber-gold text-[100px] md:text-[180px] lg:text-[280px] leading-none drop-shadow-[0_0_40px_rgba(212,160,23,0.6)]"
              >
                {text}
              </h2>
            ))}
          </motion.div>
        </div>

        {/* Text 3: Moving Right */}
        <div className="w-[200vw] flex overflow-hidden whitespace-nowrap rotate-[-1deg] origin-center">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-50%", 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            {Array(4).fill("PROFESSIONALISM • EFFICIENCY • STRATEGY • ").map((text, i) => (
              <h2 
                key={i} 
                className="font-display font-black text-transparent text-[80px] md:text-[150px] lg:text-[220px] leading-none drop-shadow-[0_0_10px_rgba(0,0,0,1)]"
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.6)' }}
              >
                {text}
              </h2>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Title / CTA floating on top */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
        <a 
          href="https://www.appalachiadigital.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-black/80 backdrop-blur-xl border-2 border-amber-gold text-amber-gold font-black text-lg md:text-2xl uppercase tracking-[0.2em] hover:bg-amber-gold hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(212,160,23,0.4)] hover:shadow-[0_0_60px_rgba(212,160,23,0.8)] group"
        >
          <span>Elevate Your Brand</span>
          <svg className="w-6 h-6 md:w-8 md:h-8 ml-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
