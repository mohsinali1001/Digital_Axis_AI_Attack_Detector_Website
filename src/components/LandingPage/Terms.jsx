import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Zap, ArrowLeft } from "lucide-react";
import PageHead from "../PageHead/PageHead";

const Terms = () => {
  return (
    <>
      <PageHead pageTitle="Terms of Service" />
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
              <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
            </div>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 p-8 sm:p-10 text-gray-300 space-y-6"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using DigitalAxis services, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily use DigitalAxis services for personal and commercial
                purposes. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
              <p>
                DigitalAxis provides AI-powered website attack detection services. We reserve the right to
                modify or discontinue the service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account credentials and
                for all activities that occur under their account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                DigitalAxis shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:support@digitalaxis.com" className="text-blue-400 hover:text-blue-300">
                  support@digitalaxis.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;

