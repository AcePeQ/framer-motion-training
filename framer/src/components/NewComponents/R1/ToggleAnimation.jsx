import React, { useState } from "react";

import { motion } from "motion/react";

const ToggleAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        margin: "20px",
      }}
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#3498db",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        {isVisible ? "Ukryj" : "Pokaż"} Element
      </button>

      <div
        style={{
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          animate={
            isVisible
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 20, scale: 0.8 }
          }
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 300,
          }}
          style={{
            width: "120px",
            height: "120px",
            backgroundColor: "#9b59b6",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          🎉
        </motion.div>
      </div>

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        Element powinien płynnie się pojawiać/znikać z animacją scale i slide up
      </p>
    </div>
  );
};

export default ToggleAnimation;
