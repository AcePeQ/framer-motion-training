import React, { useState } from "react";

import { motion, useDragControls } from "motion/react";

const SwipeCard = () => {
  const [cardPosition, setCardPosition] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null); // 'left' | 'right' | null
  const [isVisible, setIsVisible] = useState(true);

  const resetCard = () => {
    setCardPosition(0);
    setSwipeDirection(null);
    setIsVisible(true);
  };

  const handleDragEnd = (event, info) => {
    // Logika swipe powinna być tutaj:
    // - sprawdź velocity.x i offset.x
    // - jeśli velocity > 500 lub offset > 100 → swipe out
    // - ustaw odpowiedni swipeDirection i cardPosition
    console.log("Drag ended:", info);
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        margin: "20px",
        textAlign: "center",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#2c3e50" }}>Swipe Card</h3>

      {isVisible ? (
        <motion.div
          drag="x"
          // Card powinna być draggable="x" z onDragEnd handler
          onDragEnd={handleDragEnd}
          style={{
            width: "280px",
            height: "200px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            padding: "30px",
            cursor: "grab",
            position: "relative",
            border: "3px solid transparent",
            // Kolor border powinien się zmieniać na podstawie kierunku przeciągania
            borderColor:
              swipeDirection === "left"
                ? "#e74c3c"
                : swipeDirection === "right"
                ? "#2ecc71"
                : "transparent",
            // Pozycja powinna być kontrolowana przez drag/animate
            transform: `translateX(${cardPosition}px)`,
            transition: "none", // Zastąp motion transition
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "48px",
                marginBottom: "15px",
              }}
            >
              {swipeDirection === "left"
                ? "👎"
                : swipeDirection === "right"
                ? "👍"
                : "📱"}
            </div>

            <h4
              style={{
                fontSize: "20px",
                color: "#2c3e50",
                marginBottom: "10px",
              }}
            >
              {swipeDirection === "left"
                ? "Nope!"
                : swipeDirection === "right"
                ? "Like!"
                : "Swipe Card"}
            </h4>

            <p
              style={{
                fontSize: "14px",
                color: "#7f8c8d",
                margin: 0,
              }}
            >
              {swipeDirection
                ? `Swiped ${swipeDirection}!`
                : "Swipe left or right"}
            </p>
          </div>

          {/* Swipe indicators */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              opacity: swipeDirection === "left" ? 1 : 0.3,
            }}
          >
            ←
          </div>

          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "24px",
              opacity: swipeDirection === "right" ? 1 : 0.3,
            }}
          >
            →
          </div>
        </motion.div>
      ) : (
        <div
          style={{
            width: "280px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#7f8c8d",
          }}
        >
          Card swiped away!
        </div>
      )}

      <button
        onClick={resetCard}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#3498db",
          color: "#ffffff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Reset Card
      </button>

      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          marginTop: "20px",
          maxWidth: "350px",
        }}
      >
        Przeciągnij kartę w lewo (👎) lub prawo (👍). Szybki ruch lub
        przeciągnięcie ponad 100px spowoduje swipe away.
      </p>
    </div>
  );
};

export default SwipeCard;
