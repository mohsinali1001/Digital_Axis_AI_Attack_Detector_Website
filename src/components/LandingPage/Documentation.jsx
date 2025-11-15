import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Zap, ArrowLeft, BookOpen } from "lucide-react";
import PageHead from "../PageHead/PageHead";

const Documentation = () => {
  return (
    <>
      <PageHead pageTitle="Documentation" />
      <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8
                      bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                      from-gray-900 via-gray-950 to-black">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10">
                <Shield size={32} className="text-blue-500 absolute" />
                <Zap size={16} className="text-blue-300 absolute mt-1" />
              </div>
              <h1 className="text-4xl font-extrabold text-white">Documentation</h1>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 p-12 sm:p-16 text-center"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-24 h-24 bg-blue-600/10 rounded-full flex items-center justify-center">
                <BookOpen size={48} className="text-blue-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
              
              <p className="text-gray-300 text-lg max-w-md">
                We're working hard to bring you comprehensive documentation for DigitalAxis. 
                This will include guides, API references, tutorials, and more.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Go to Home
                </Link>
                <a
                  href="/#contact"
                  className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors duration-200 inline-block text-center"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Documentation;

