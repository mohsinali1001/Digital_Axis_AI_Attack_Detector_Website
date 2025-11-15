import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Zap, ArrowLeft } from "lucide-react";
import PageHead from "../PageHead/PageHead";

const Privacy = () => {
  return (
    <>
      <PageHead pageTitle="Privacy Policy" />
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
              <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including name, email address,
                and website data necessary for providing our attack detection services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                process transactions, and send you technical notices and support messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share
                information only as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time.
                Contact us at{" "}
                <a href="mailto:support@digitalaxis.com" className="text-blue-400 hover:text-blue-300">
                  support@digitalaxis.com
                </a>{" "}
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p>
                We use cookies to enhance your experience, analyze site usage, and assist in our marketing
                efforts. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;

