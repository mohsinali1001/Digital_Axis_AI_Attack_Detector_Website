import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import { ShieldCheck, Activity, Eye, WifiOff } from "lucide-react"; 

// ... (motion variants remain the same) ...

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } } };

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const features = [
    { icon: ShieldCheck, title: "AI Attack Prediction", desc: "Detect unusual login behavior, packet anomalies, and suspicious traffic using advanced AI models." },
    { icon: Activity, title: "Real-Time Monitoring", desc: "Track all incoming activity instantly with automated detection and classified alert levels." },
    { icon: Eye, title: "Smart IP Tracking", desc: "Spot unexpected IP changes and blocked regions with continuous monitoring." },
    { icon: WifiOff, title: "Brute Force Defense", desc: "Recognize repeated failed login attempts and prevent automated password attacks." },
  ];

  return (
    <section id="features" className="w-full bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Powerful Protection <span className="text-blue-400">Features</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-xl" // Increased general description text size
        >
          Your website stays safe with **real-time AI analysis** of traffic patterns, user behavior, and system anomalies.
        </motion.p>


        <motion.div
          ref={ref}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3> {/* Increased title size */}
                <p className="text-gray-400 mt-2 text-lg">{feature.desc}</p> {/* Increased description size */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;