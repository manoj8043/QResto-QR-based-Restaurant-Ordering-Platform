import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Errorpage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <button onClick={() => navigate("/")} className="btn btn-primary">
        Go Back Home
      </button>
    </motion.div>
  );
}

export default Errorpage;
