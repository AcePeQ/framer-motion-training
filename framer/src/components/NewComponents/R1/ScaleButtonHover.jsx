import React from "react";

import { motion } from "motion/react";

const ScaleButton = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#eb301c" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: "14px 28px",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#e74c3c",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(231, 76, 60, 0.3)",
          outline: "none",
          transition: "none",
        }}
      >
        Hover & Click Me!
      </motion.button>

      <p
        style={{
          marginTop: "20px",
          color: "#7f8c8d",
          fontSize: "14px",
        }}
      >
        Button powinien się powiększać przy hover i zmniejszać przy kliknięciu
      </p>
    </div>
  );
};

export default ScaleButton;
