import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import wuff from '../public/wuff.png';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed w-screen inset-0 z-50 flex items-center justify-between bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text swooping in from the left */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0vw" }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className="text-black font-extrabold text-[25vw] leading-[0.9] whitespace-pre-line"
          >
            MY NAME<br />WUFF
          </motion.div>

          {/* Dog image swooping in from the right */}
          <motion.img
            src={wuff}
            alt="wuff"
            className="right-0 bottom-0 w-auto h-[100vh]"
            initial={{ x: "100vw", rotate: 15 }}
            animate={{ x: "-20vw", rotate: 0 }}
            exit={{ x: "100vw", rotate: -10 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
