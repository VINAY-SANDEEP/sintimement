import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/ShopRegister");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden">

      {/* Animated Background Blur Circles */}
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[400px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">

          <div className="relative">
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full bg-white/20 text-white placeholder-gray-300 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              required
              placeholder="Password"
              className="w-full bg-white/20 text-white placeholder-gray-300 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Login
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
