import React from "react";

import { motion } from "motion/react";

const AdvancedButton = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "#0c5585",
          transition: {
            scale: { type: "spring", stiffness: 300, damping: 20 },
            backgroundColor: { duration: 1 },
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            scale: {
              type: "spring",
              stiffness: 100,
            },
          },
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "16px 32px",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#3498db",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(52, 152, 219, 0.3)",
          outline: "none",
          transition: "none",
        }}
      >
        Download File
        <motion.span
          whileHover={{
            x: 20,
          }}
          style={{
            fontSize: "20px",
            transition: "none",
          }}
        >
          →
        </motion.span>
      </motion.button>

      <p
        style={{
          marginTop: "20px",
          color: "#7f8c8d",
          fontSize: "14px",
          maxWidth: "300px",
          margin: "20px auto 0",
        }}
      >
        Button powinien mieć: hover scale + shadow + color change, strzałka
        powinna przesuwać się w prawo przy hover, tap scale z spring physics
      </p>
    </div>
  );
};

export default AdvancedButton;
