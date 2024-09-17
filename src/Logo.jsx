import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
// Imports Framer Motion for animations and React hooks.

const cursorVariants = {
  blink: {
    opacity: [0, 1],
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.5 },
  },
};
// Defines the blinking cursor effect.

function Logo() {
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = ["L", "O", "G", "O"];
  // Manages typing state and tracks current index in the logo text array.

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 400 + 300); // Typing delay
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false); // Stops typing once done
    }
  }, [currentIndex, text.length]);
  // Controls typing animation.

  return (
    <div className="logo-container no-select" style={{ fontSize: "2rem", color: "white" }}>
      <div className="logo">
        {text.map((char, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {index < currentIndex ? char : ""}
          </span>
        ))}
        {isTyping && <motion.span className="cursor" variants={cursorVariants} animate="blink">|</motion.span>}
      </div>
    </div>
  );
}

export default Logo;
