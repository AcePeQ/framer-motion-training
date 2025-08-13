import React from "react";

import { motion } from "motion/react";

const KeyframeAnimation = () => {
  return (
    <div
      style={{
        padding: "40px",
        height: "200px",
        position: "relative",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        margin: "20px",
        overflow: "hidden",
      }}
    >
      {/* Markers pokazujące pozycje keyframe */}
      {[0, 100, 50, 150, 75].map((x, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${x}px`,
            top: "160px",
            width: "2px",
            height: "20px",
            backgroundColor: "#bdc3c7",
            fontSize: "10px",
            textAlign: "center",
            color: "#7f8c8d",
          }}
        >
          {index + 1}
        </div>
      ))}

      <motion.div
        animate={{ x: [0, 100, 50, 150, 75], rotate: [0, 90, -45, 180, 0] }}
        transition={{
          times: [0, 0.2, 0.5, 0.8, 1],
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#e74c3c",
          borderRadius: "8px",
          position: "absolute",
          top: "60px",
          left: "0px", // Pozycja powinna być animowana przez keyframes
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: "bold",
          // Rotation i backgroundColor też powinny być animowane
          transform: "rotate(0deg)",
          transition: "none", // Zastąp animacją keyframe
        }}
      >
        KF
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "20px",
          right: "20px",
          fontSize: "12px",
          color: "#7f8c8d",
          textAlign: "center",
        }}
      >
        Element powinien przechodzić przez 5 pozycji z rotacją i zmianą koloru
      </div>
    </div>
  );
};

export default KeyframeAnimation;
