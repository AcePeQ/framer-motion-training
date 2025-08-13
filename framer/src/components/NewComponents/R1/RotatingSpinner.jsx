import React from "react";

import { motion } from "motion/react";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        gap: "20px",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "4px solid #ecf0f1",
          borderTop: "4px solid #3498db",
          position: "relative",
        }}
      />

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        Loading...
      </p>

      <div
        style={{
          fontSize: "14px",
          color: "#95a5a6",
          textAlign: "center",
          maxWidth: "300px",
        }}
      >
        Spinner powinien obracać się w nieskończoność z stałą prędkością
      </div>
    </div>
  );
};

export default LoadingSpinner;
