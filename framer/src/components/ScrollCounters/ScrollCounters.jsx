import { useMotionValue, useSpring, motion, useTransform } from "motion/react";
import React, { useEffect } from "react";

const targets = {
  users: 10000,
  sales: 2500,
  projects: 350,
  awards: 48,
};

const ScrollCounter = () => {
  const usersMotionValue = useMotionValue(0);

  const springUsers = useSpring(usersMotionValue, {
    stiffness: 100,
    damping: 50,
    duration: 10,
  });

  const usersCounter = useTransform(springUsers, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    usersMotionValue.set(targets.users);
  }, [usersMotionValue]);

  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Metryki</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* Licznik użytkowników */}
        <div style={counterStyle}>
          <motion.div className="number">{usersCounter}</motion.div>
          <div className="label">Użytkowników</div>
        </div>

        {/* Licznik sprzedaży */}
        <div style={counterStyle}>
          <div className="number">0</div>
          <div className="label">Sprzedaży</div>
        </div>

        {/* Licznik projektów */}
        <div style={counterStyle}>
          <div className="number">0</div>
          <div className="label">Projektów</div>
        </div>

        {/* Licznik nagród */}
        <div style={counterStyle}>
          <div className="number">0</div>
          <div className="label">Nagród</div>
        </div>
      </div>
    </div>
  );
};

const counterStyle = {
  padding: "20px",
  backgroundColor: "red",
  borderRadius: "10px",
  width: "180px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

export default ScrollCounter;
