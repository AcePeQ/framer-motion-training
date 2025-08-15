import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const menuItems = [
  { id: 1, icon: "🏠", label: "Strona główna" },
  { id: 2, icon: "👤", label: "Profil" },
  { id: 3, icon: "⚙️", label: "Ustawienia" },
  { id: 4, icon: "📧", label: "Kontakt" },
  { id: 5, icon: "🚪", label: "Wyloguj" },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {},
};

const itemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

export default function MenuComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative">
        {/* Główny przycisk menu */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          {isOpen ? "×" : "☰"}
        </motion.button>

        {/* Menu rozwijane */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl py-2 w-48 border"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  variants={itemVariants}
                  key={item.id}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="font-medium text-gray-800">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
