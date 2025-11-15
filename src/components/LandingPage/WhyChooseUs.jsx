import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { Zap, BarChart, Users, Cpu } from "lucide-react";

// Variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
};

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const reasons = [
    { icon: Zap, title: "Fast Detection", desc: "Instant alerts on suspicious activity to prevent attacks before damage occurs." },
    { icon: BarChart, title: "Accurate Predictions", desc: "AI-driven models analyze traffic patterns and user behavior with high accuracy." },
    { icon: Users, title: "User-Friendly Dashboard", desc: "Intuitive interface to monitor attacks, view logs, and manage alerts effortlessly." },
    { icon: Cpu, title: "Integrates Easily", desc: "Works with any website and backend to provide real-time protection seamlessly." },
  ];

  return (
    <section className="w-full bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header - Text Size Increased */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Why Choose <span className="text-blue-400">DigitalAxis?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-xl" // INCREASED
        >
          Experience unmatched website security with **AI-powered real-time monitoring** and user-focused features.
        </motion.p>


        {/* Reasons Grid */}
        <motion.div
          ref={ref}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon; 
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-8 bg-gray-800 rounded-xl border border-gray-700 shadow-xl text-left 
                           hover:shadow-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-5 bg-blue-600/10 rounded-full">
                  <IconComponent size={30} className="text-blue-400" />
                </div>
                {/* Card Content - Text Size Increased */}
                <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3> {/* INCREASED */}
                <p className="text-gray-400 mt-2 text-lg">{reason.desc}</p> {/* INCREASED */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;