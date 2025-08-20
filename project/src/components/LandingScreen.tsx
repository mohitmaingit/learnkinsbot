import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Trophy, ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl font-black mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            LearnerBot
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Your AI-powered learning companion that makes education
          <br />
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-bold">
            fun, interactive, and personalized
          </span>
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-400 text-sm">Advanced GPT-4 technology tailored for young learners</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
            <Zap className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Gamified</h3>
            <p className="text-gray-400 text-sm">Earn XP, unlock badges, and level up your knowledge</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
            <Trophy className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Progress Tracking</h3>
            <p className="text-gray-400 text-sm">Monitor your learning journey with detailed insights</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={onStart}
            className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-3">
              Start Learning Adventure
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-500 text-sm mt-8"
        >
          Designed for learners aged 10-15 • Powered by GPT-4 • Safe & Educational
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LandingScreen;