import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { Database, Cpu, AlertTriangle } from "lucide-react"; 

// Variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
};

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, 
  });

  const steps = [
    { icon: Database, title: "Collect Website Data", desc: "Gather traffic data, login attempts, packet sizes, and IP changes for analysis.", stepNumber: 1, },
    { icon: Cpu, title: "Process with AI Model", desc: "Our AI system analyzes patterns and detects anomalies using intelligent algorithms.", stepNumber: 2, },
    { icon: AlertTriangle, title: "Predict Potential Attacks", desc: "Get early warnings of potential attacks so you can prevent breaches.", stepNumber: 3, },
  ];

  return (
    <section id="how-it-works" className="w-full bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header - Text Size Increased */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          The Simple <span className="text-blue-400">3-Step</span> Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-xl" // INCREASED
        >
          Understand the simple process that keeps your website safe and secure.
        </motion.p>

        {/* Steps Grid with Visual Connectors - Apply main motion container and ref */}
        <motion.div
          ref={ref}
          className="mt-16 grid md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          
          {/* Desktop Connector Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block absolute top-1/4 left-0 h-1 bg-gray-700/50"
            style={{ width: inView ? '100%' : 0 }} 
          ></motion.div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative z-10 p-8 bg-gray-800 rounded-xl border border-gray-700 shadow-xl 
                           hover:shadow-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Step Number Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-10 h-10 flex items-center justify-center rounded-full 
                                bg-blue-600 text-white font-bold text-lg border-4 border-gray-950 shadow-lg">
                  {step.stepNumber}
                </div>
                
                {/* Icon Container */}
                <div className="flex justify-center mt-5 mb-4">
                   <div className="flex items-center justify-center w-14 h-14 bg-blue-600/10 rounded-full">
                     <IconComponent size={30} className="text-blue-400" />
                   </div>
                </div>
                
                {/* Card Content - Text Size Increased */}
                <h3 className="text-2xl font-bold text-white mt-3">{step.title}</h3> {/* INCREASED */}
                <p className="text-gray-400 mt-2 text-lg">{step.desc}</p> {/* INCREASED */}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;