import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const cards = [
  {
    id: 1,
    title: "React Development",
    category: "Frontend",
    description: "Naucz się tworzyć nowoczesne aplikacje React",
    fullContent:
      "Complete React course covering hooks, context, performance optimization, testing, and modern patterns. Build real projects and master the ecosystem.",
    color: "bg-blue-500",
    icon: "⚛️",
  },
  {
    id: 2,
    title: "Node.js Backend",
    category: "Backend",
    description: "Serwery i API w Node.js",
    fullContent:
      "Master server-side JavaScript with Express.js, databases, authentication, real-time features, deployment, and production best practices.",
    color: "bg-green-500",
    icon: "🟢",
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    description: "Projektowanie interfejsów użytkownika",
    fullContent:
      "Learn design principles, user research, prototyping, design systems, accessibility, and modern design tools like Figma.",
    color: "bg-purple-500",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Database Design",
    category: "Backend",
    description: "Projektowanie i optymalizacja baz danych",
    fullContent:
      "Deep dive into SQL and NoSQL databases, schema design, indexing, performance tuning, and data modeling best practices.",
    color: "bg-orange-500",
    icon: "🗄️",
  },
  {
    id: 5,
    title: "Mobile Development",
    category: "Mobile",
    description: "Aplikacje mobilne React Native",
    fullContent:
      "Build cross-platform mobile apps with React Native, navigation, native modules, app store deployment, and performance optimization.",
    color: "bg-pink-500",
    icon: "📱",
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    category: "DevOps",
    description: "Automatyzacja i wdrażanie aplikacji",
    fullContent:
      "Master CI/CD, Docker, Kubernetes, cloud platforms, monitoring, logging, and infrastructure as code.",
    color: "bg-indigo-500",
    icon: "🚀",
  },
];

const ExpandableCardsGrid = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Kursy Programowania
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} ${
                expandedCard === card.id ? "row-span-2" : ""
              } text-white rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow overflow-hidden`}
              onClick={() => {
                /* Toggle expanded state */
                setExpandedCard((prevCardId) =>
                  prevCardId === card.id ? 0 : card.id
                );
              }}
            >
              {/* Header - zawsze widoczny */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{card.icon}</div>
                  <div className="text-right">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {card.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>

              {/* Expanded content - pokazuje się tylko gdy card jest rozwinięty */}
              <AnimatePresence>
                {expandedCard === card.id && (
                  <motion.div
                    layout
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-white/90 text-sm leading-relaxed mb-4">
                        {card.fullContent}
                      </p>
                      <div className="flex justify-between items-center">
                        <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Zapisz się
                        </button>
                        <button className="text-white/70 hover:text-white text-sm">
                          Dowiedz się więcej →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="text-center mt-12 text-gray-600">
          <p>Kliknij na kartę aby zobaczyć więcej szczegółów</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCardsGrid;
