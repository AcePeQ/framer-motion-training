import React, { useRef, useState } from "react";

import { motion, useDragControls } from "motion/react";

const CustomDragControls = () => {
  const dragConstrains = useRef();
  const [activeAxis, setActiveAxis] = useState(null);
  const dragControls = useDragControls();

  const handleXDrag = (event) => {
    setActiveAxis("x");
    // Tutaj powinien być dragControls.start(event, { snapToCursor: true })
    dragControls.start(event, { snapToCursor: true });
  };

  const handleYDrag = (event) => {
    setActiveAxis("y");
    // Tutaj powinien być dragControls.start(event, { snapToCursor: true })
    dragControls.start(event, { snapToCursor: true });
  };

  const handleDragEnd = () => {
    setActiveAxis(null);
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        margin: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2c3e50",
        }}
      >
        Custom Drag Controls
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Control Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onPointerDown={handleXDrag}
            style={{
              padding: "12px 20px",
              backgroundColor: activeAxis === "x" ? "#e74c3c" : "#3498db",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.2s",
            }}
          >
            ← Drag X →
          </button>

          <button
            onPointerDown={handleYDrag}
            style={{
              padding: "12px 20px",
              backgroundColor: activeAxis === "y" ? "#e74c3c" : "#2ecc71",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.2s",
            }}
          >
            ↑ Drag Y ↓
          </button>
        </div>

        {/* Draggable Element */}
        <div
          ref={dragConstrains}
          style={{
            width: "300px",
            height: "200px",
            border: "2px dashed #bdc3c7",
            borderRadius: "8px",
            position: "relative",
            backgroundColor: "#ffffff",
          }}
        >
          <motion.div
            drag={activeAxis ?? false}
            dragConstraints={dragConstrains}
            // Ten element powinien mieć dragControls i dragListener: false
            // oraz reagować na activeAxis
            onDragEnd={handleDragEnd}
            dragListener={false}
            dragControls={dragControls}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor:
                activeAxis === "x"
                  ? "#3498db"
                  : activeAxis === "y"
                  ? "#2ecc71"
                  : "#9b59b6",
              borderRadius: "50%",
              position: "absolute",
              top: "70px",
              left: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "12px",
              // Pozycja powinna być kontrolowana przez drag
              transition: "background-color 0.2s",
            }}
          >
            {activeAxis ? activeAxis.toUpperCase() : "DRAG"}
          </motion.div>
        </div>
      </div>

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          textAlign: "center",
          marginTop: "20px",
          maxWidth: "400px",
          margin: "20px auto 0",
        }}
      >
        Kliknij przycisk X lub Y żeby aktywować przeciąganie w danej osi.
        Element powinien zmieniać kolor w zależności od aktywnej osi.
      </p>
    </div>
  );
};

export default CustomDragControls;
