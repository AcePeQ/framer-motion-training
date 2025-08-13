import React from "react";

import { motion } from "motion/react";

const MultiStepAnimation = () => {
  return (
    <div
      style={{
        padding: "40px",
        height: "200px",
        position: "relative",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        margin: "20px",
      }}
    >
      <motion.div
        initial={{ x: -100, scale: 0.5, backgroundColor: "#e74c3c" }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          backgroundColor: "#2ecc71",
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.5, 1],
        }}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#e74c3c",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "14px",
          position: "absolute",
          top: "60px",
          left: "40px",
        }}
      >
        ANIMATE
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          fontSize: "14px",
          color: "#7f8c8d",
          textAlign: "center",
        }}
      >
        Element powinien: przesunąć się w prawo → powiększyć się → wrócić →
        zmienić kolor na zielony
      </div>
    </div>
  );
};

export default MultiStepAnimation;
