import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
                    bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                    from-gray-900 via-gray-950 to-black relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Large, blurred primary blue blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[900px] h-[900px] 
                        bg-blue-600/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        
        {/* Secondary subtle purple/pink glow */}
        <div className="absolute bottom-0 left-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] 
                        bg-purple-600/5 rounded-full filter blur-3xl opacity-20"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-small-white/[0.04] [mask-image:linear-gradient(to_t,transparent,white,transparent)]"></div>
      </div>

      {/* Logo/Home Link */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 z-10 group"
      >
        <div className="relative flex items-center justify-center w-8 h-8">
          <Shield size={28} className="text-blue-500 absolute group-hover:text-blue-400 transition-colors" />
          <Zap size={14} className="text-blue-300 absolute mt-1 group-hover:text-blue-200 transition-colors" />
        </div>
        <h1 className="text-2xl font-extrabold text-blue-400 tracking-wider group-hover:text-blue-300 transition-colors">
          DigitalAxis
        </h1>
      </Link>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-white mb-2"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-base"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Form Content */}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;

