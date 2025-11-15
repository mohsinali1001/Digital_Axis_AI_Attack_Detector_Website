import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants (unchanged) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};
// --- End Framer Motion Variants ---

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gray-950 pt-40 pb-28 min-h-screen flex items-center 
                        overflow-hidden 
                        bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                        from-gray-900 via-gray-950 to-black">
      
      {/* Abstract Background Layer (remains visible behind text, but the right-side elements are hidden) */}
      <div className="absolute inset-0 z-0">
        {/* Large, blurred primary blue blob for atmospheric glow - animated */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[900px] h-[900px] 
                        bg-blue-600/10 rounded-full filter blur-3xl opacity-30 animate-flow-pulse"></div>

        {/* Secondary subtle purple/pink glow on the left - animated for depth */}
        <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] 
                        bg-purple-600/5 rounded-full filter blur-3xl opacity-20 animate-flow-shift"></div>

        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-grid-small-white/[0.04] [mask-image:linear-gradient(to_t,transparent,white,transparent)]"></div>
      </div>

      {/* Main Content Div */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

        {/* LEFT TEXT CONTENT - MOBILE CENTER ALIGNMENT APPLIED */}
        <motion.div
          className="md:col-span-7 text-center md:text-left" // <-- NEW: text-center for mobile, md:text-left for desktop
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight"
            variants={itemVariants}
          >
            AI-Powered 
            <span className="text-blue-400 block sm:inline-block"> Attack Detection</span> 
            <span className="block mt-1 sm:mt-0"> for Modern Websites</span>
          </motion.h1>

          <motion.p 
            className="text-gray-300 mt-6 text-xl max-w-xl mx-auto md:mx-0" // <-- NEW: mx-auto to center block element on mobile
            variants={itemVariants}
          >
            Stay protected with real-time AI predictions that detect suspicious 
            login attempts, unusual packet sizes, and sudden IP shifts—**before damage happens.**
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" // <-- NEW: justify-center for mobile, md:justify-start for desktop
            variants={itemVariants}
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]">
              Explore Features
            </button>
            <button className="border-2 border-gray-500 text-gray-300 px-8 py-3 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL - HIDDEN ON MOBILE SCREENS */}
        <motion.div 
          className="hidden md:col-span-5 md:flex items-center justify-center order-first md:order-last min-h-[400px]" // <-- NEW: hidden on mobile, flex on md+
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Abstract Visual Content (kept brief for this example) */}
          <div className="relative w-full max-w-lg aspect-square"> 
            {/* Central Animated Hexagon/Orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-600/50 to-purple-600/50 rounded-2xl 
                            rotate-45 animate-spin-slow origin-center shadow-2xl shadow-blue-500/50 
                            before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-400/80 before:to-purple-400/80 
                            before:rounded-2xl before:-z-10 before:animate-glow-pulse">
                <div className="absolute inset-0 flex items-center justify-center -rotate-45 text-white text-5xl font-bold animate-pulse-fast">
                  <span className="sr-only">AI</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-blue-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.01-.117 2.005-.337 2.955-.503 2.416-2.143 4.609-4.885 6.474-.188.129-.374.25-.558.364A12.004 12.004 0 0112 21c-2.485 0-4.663-1.04-6.371-2.695a48.414 48.414 0 01-1.121-1.214C3.057 16.32 2.25 14.363 2.25 12c0-1.01.117-2.005.337-2.955.503-2.416 2.143-4.609 4.885-6.474.188-.129.374-.25.558-.364A12.004 12.004 0 0112 3c2.485 0 4.663 1.04 6.371 2.695a48.414 48.414 0 011.121 1.214C20.943 7.68 21.75 9.637 21.75 12z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* ... other subtle elements ... */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;