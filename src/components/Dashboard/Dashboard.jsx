import React from "react";
import { motion } from "framer-motion";
import PageHead from "../PageHead/PageHead";

const Dashboard = () => {
  return (
    <>
      <PageHead pageTitle="Dashboard" />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-12 max-w-2xl w-full border border-gray-700"
        >
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            User Dashboard
          </h1>
          <p className="text-gray-400 text-center text-lg">
            We will work on it later
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Dashboard;

