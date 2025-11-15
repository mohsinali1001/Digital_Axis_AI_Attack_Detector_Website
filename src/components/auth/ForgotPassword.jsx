import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import AuthLayout from "./AuthLayout";
import PageHead from "../PageHead/PageHead";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Password reset requested for:", email);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <>
        <PageHead pageTitle="Check Your Email" />
        <AuthLayout
          title="Check Your Email"
          subtitle="We've sent a password reset link to your email address"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
              <Mail size={32} className="text-blue-400" />
            </div>
            <p className="text-gray-300">
              If an account exists with <strong className="text-white">{email}</strong>, 
              you will receive a password reset link shortly.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Login
            </Link>
          </motion.div>
        </AuthLayout>
      </>
    );
  }

  return (
    <>
      <PageHead pageTitle="Forgot Password" />
      <AuthLayout
        title="Reset Password"
        subtitle="Enter your email address and we'll send you a reset link"
      >
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={20} className="text-gray-500" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 
                     rounded-lg font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 
                     transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 
                     disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Login
            </Link>
          </div>
        </motion.form>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;

