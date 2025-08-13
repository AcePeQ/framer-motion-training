import React from "react";

import { motion } from "motion/react";

const FadeInCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "320px",
        height: "240px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        margin: "20px auto",
        border: "1px solid #e1e8ed",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          color: "#2c3e50",
          marginBottom: "12px",
          fontWeight: "600",
        }}
      >
        Witaj w Motion!
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#7f8c8d",
          lineHeight: "1.5",
          marginBottom: "16px",
        }}
      >
        Ta karta powinna płynnie się pojawić z animacją fade in i slide up.
      </p>
      <div
        style={{
          width: "60px",
          height: "4px",
          backgroundColor: "#3498db",
          borderRadius: "2px",
        }}
      />
    </motion.div>
  );
};

export default FadeInCard;
