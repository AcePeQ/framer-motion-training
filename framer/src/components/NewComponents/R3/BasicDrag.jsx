import React, { useRef } from "react";

import { motion } from "motion/react";

const BasicDragConstraints = () => {
  const constraintsRef = useRef(null);

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
      <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>
        Drag with Constraints
      </h3>

      <div
        ref={constraintsRef}
        style={{
          width: "400px",
          height: "300px",
          border: "3px dashed #3498db",
          borderRadius: "8px",
          margin: "0 auto",
          position: "relative",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          whileDrag={{
            scale: 1.1,
            rotate: 5,
            backgroundColor: "#c52918",
          }}
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#e74c3c",
            borderRadius: "12px",
            cursor: "grab",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          DRAG
        </motion.div>
      </div>

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          marginTop: "20px",
          maxWidth: "400px",
          margin: "20px auto 0",
        }}
      >
        Element powinien być draggable tylko w obrębie niebieskiego kontejnera,
        z elastic boundaries i visual feedback podczas przeciągania
      </p>
    </div>
  );
};

export default BasicDragConstraints;
