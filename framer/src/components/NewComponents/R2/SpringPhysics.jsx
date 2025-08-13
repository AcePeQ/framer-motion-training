import React, { useState } from "react";

import { motion } from "motion/react";

const SpringComparison = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const springs = [
    { name: "Slow & Bouncy", stiffness: 50, damping: 8, color: "#e74c3c" },
    { name: "Natural", stiffness: 200, damping: 15, color: "#2ecc71" },
    { name: "Fast & Tight", stiffness: 500, damping: 25, color: "#3498db" },
  ];

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
        onClick={() => setIsAnimated(!isAnimated)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#9b59b6",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        {isAnimated ? "Reset" : "Animate"} Springs
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          height: "200px",
          gap: "20px",
        }}
      >
        {springs.map((spring, index) => (
          <div key={index} style={{ textAlign: "center", flex: 1 }}>
            <motion.div
              animate={isAnimated ? { y: -80 } : { y: 0 }}
              transition={{
                type: "spring",
                stiffness: spring.stiffness,
                damping: spring.damping,
              }}
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: spring.color,
                borderRadius: "8px",
                margin: "0 auto 10px",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "2px",
                }}
              >
                {spring.name}
              </div>
              <div style={{ fontSize: "10px", color: "#7f8c8d" }}>
                stiffness: {spring.stiffness}
                <br />
                damping: {spring.damping}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        Każdy kwadrat powinien animować się z różnymi spring physics
      </p>
    </div>
  );
};

export default SpringComparison;
