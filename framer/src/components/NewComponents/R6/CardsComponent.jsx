import React from "react";

import { motion } from "motion/react";

const cardsData = [
  {
    id: 1,
    title: "Design",
    icon: "🎨",
    description: "Tworzenie pięknych interfejsów",
  },
  {
    id: 2,
    title: "Development",
    icon: "💻",
    description: "Budowanie aplikacji web",
  },
  {
    id: 3,
    title: "Marketing",
    icon: "📢",
    description: "Promocja produktów online",
  },
  {
    id: 4,
    title: "Analytics",
    icon: "📊",
    description: "Analiza danych biznesowych",
  },
  {
    id: 5,
    title: "Support",
    icon: "🎧",
    description: "Pomoc techniczna 24/7",
  },
  {
    id: 6,
    title: "Security",
    icon: "🔒",
    description: "Bezpieczeństwo danych",
  },
];

// Funkcja do generowania kolorów na podstawie indexu
const getColorClass = (index) => {
  const colors = [
    "bg-red-100 border-red-300",
    "bg-blue-100 border-blue-300",
    "bg-green-100 border-green-300",
    "bg-yellow-100 border-yellow-300",
    "bg-purple-100 border-purple-300",
    "bg-pink-100 border-pink-300",
  ];
  return colors[index % colors.length];
};

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
};

export default function CardsComponent() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Nasze Usługi
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <motion.div
            variants={variants}
            key={card.id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`${getColorClass(
              index
            )} p-6 rounded-xl border-2 cursor-pointer hover:shadow-lg transition-shadow`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                  Karta #{index + 1}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
