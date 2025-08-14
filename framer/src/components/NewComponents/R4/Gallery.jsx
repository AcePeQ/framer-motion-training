import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const items = [
  {
    id: 1,
    title: "Sunset Mountains",
    category: "nature",
    color: "bg-orange-400",
  },
  { id: 2, title: "City Lights", category: "urban", color: "bg-blue-500" },
  { id: 3, title: "Forest Path", category: "nature", color: "bg-green-500" },
  { id: 4, title: "Ocean Waves", category: "nature", color: "bg-cyan-400" },
  { id: 5, title: "Skyscraper", category: "urban", color: "bg-gray-600" },
  { id: 6, title: "Portrait", category: "people", color: "bg-pink-400" },
  { id: 7, title: "Street Art", category: "urban", color: "bg-purple-500" },
  { id: 8, title: "Wedding", category: "people", color: "bg-rose-300" },
  { id: 9, title: "Mountain Lake", category: "nature", color: "bg-teal-500" },
  {
    id: 10,
    title: "Business Team",
    category: "people",
    color: "bg-indigo-500",
  },
  { id: 11, title: "Night City", category: "urban", color: "bg-slate-700" },
  {
    id: 12,
    title: "Desert Dunes",
    category: "nature",
    color: "bg-yellow-500",
  },
];

const filters = [
  { id: "all", label: "Wszystkie", count: items.length },
  {
    id: "nature",
    label: "Natura",
    count: items.filter((item) => item.category === "nature").length,
  },
  {
    id: "urban",
    label: "Miasto",
    count: items.filter((item) => item.category === "urban").length,
  },
  {
    id: "people",
    label: "Ludzie",
    count: items.filter((item) => item.category === "people").length,
  },
];

const FilterableGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  function changeActiveFilter(filter) {
    setActiveFilter(filter);
  }

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Galeria Zdjęć
        </h1>

        {/* Filtry */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => changeActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-75">
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                key={item.id}
                className={`${item.color} rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow`}
              >
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📷</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-80 capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stan pusty */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl">Brak elementów w tej kategorii</p>
          </div>
        )}

        {/* Statystyki */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            Wyświetlane: {filteredItems.length} z {items.length} elementów
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterableGallery;
