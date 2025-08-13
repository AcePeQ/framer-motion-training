import React from "react";

import { motion } from "motion/react";

const MultiHoverCard = () => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        minHeight: "400px",
        alignItems: "center",
      }}
    >
      <motion.div
        // Main card - powinien mieć whileHover scale + shadow + y
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          y: 75,
        }}
        style={{
          width: "320px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          position: "relative",
          // Hovery powinny być dodane przez motion
          transition: "none",
        }}
      >
        {/* Badge */}
        <motion.div
          // Badge powinien mieć whileHover pulse (scale animation)
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              repeat: Infinity,
            },
          }}
          style={{
            position: "absolute",
            top: "-10px",
            right: "20px",
            backgroundColor: "#e74c3c",
            color: "#ffffff",
            padding: "6px 12px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            transition: "none",
          }}
        >
          NEW
        </motion.div>

        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 360,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          // Icon powinien mieć whileHover rotate 360° z spring
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#3498db",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            fontSize: "24px",
            transition: "none",
          }}
        >
          ⭐
        </motion.div>

        {/* Title */}
        <h3
          // Title powinien mieć whileHover color change
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2c3e50",
            marginBottom: "12px",
            transition: "none",
          }}
        >
          Premium Feature
        </h3>

        <p
          style={{
            fontSize: "16px",
            color: "#7f8c8d",
            lineHeight: "1.5",
            marginBottom: "24px",
          }}
        >
          Upgrade to unlock amazing premium features and boost your
          productivity.
        </p>

        {/* Button */}
        <button
          // Button powinien mieć whileHover + whileTap z własnymi animacjami
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "16px",
            fontWeight: "600",
            backgroundColor: "#2ecc71",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "none",
          }}
        >
          Upgrade Now
        </button>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "12px",
          color: "#7f8c8d",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Każdy element powinien mieć własne hover animations: Card
        (scale+shadow), Icon (rotate), Title (color), Badge (pulse), Button
        (scale+color)
      </div>
    </div>
  );
};

export default MultiHoverCard;
