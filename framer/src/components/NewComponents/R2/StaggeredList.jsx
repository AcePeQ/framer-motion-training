import React from "react";

import { motion } from "motion/react";

const containerVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -30, scale: 0.9 },
  inView: { opacity: 1, x: 0, scale: 1 },
};

const StaggeredList = () => {
  const items = [
    {
      id: 1,
      title: "First Item",
      description: "This is the first item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 4,
      title: "Fourth Item",
      description: "This is the fourth item description",
    },
    {
      id: 5,
      title: "Fifth Item",
      description: "This is the fifth item description",
    },
    {
      id: 6,
      title: "Sixth Item",
      description: "This is the sixth item description",
    },
  ];

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c3e50",
          fontSize: "24px",
        }}
      >
        Staggered List
      </h2>

      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {items.map((item) => (
          <motion.div
            variants={itemVariants}
            key={item.id}
            style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e1e8ed",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px 0",
                fontSize: "18px",
                color: "#2c3e50",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#7f8c8d",
                lineHeight: "1.4",
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <p
        style={{
          textAlign: "center",
          color: "#7f8c8d",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        Lista powinna animować się kaskadowo gdy wchodzi w viewport
      </p>
    </div>
  );
};

export default StaggeredList;
