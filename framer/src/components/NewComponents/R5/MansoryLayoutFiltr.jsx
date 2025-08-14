import React from "react";

const MasonryLayout = () => {
  const items = [
    {
      id: 1,
      type: "text",
      category: "thoughts",
      content:
        "Layout animations w Framer Motion to prawdziwa magia! Możliwość automatycznego animowania zmian pozycji i rozmiaru elementów bez dodatkowego kodu to coś niesamowitego.",
      color: "bg-blue-100 border-blue-200",
      textColor: "text-blue-800",
    },
    {
      id: 2,
      type: "image",
      category: "photos",
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
      title: "Górski krajobraz",
      color: "bg-green-100 border-green-200",
    },
    {
      id: 3,
      type: "quote",
      category: "thoughts",
      content:
        "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      color: "bg-purple-100 border-purple-200",
      textColor: "text-purple-800",
    },
    {
      id: 4,
      type: "text",
      category: "tips",
      content:
        "Pro tip: Używaj layout animations razem z AnimatePresence aby uzyskać płynne przejścia w listach dynamicznych.",
      color: "bg-yellow-100 border-yellow-200",
      textColor: "text-yellow-800",
    },
    {
      id: 5,
      type: "image",
      category: "photos",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=250&fit=crop",
      title: "Tropikalna plaża",
      color: "bg-cyan-100 border-cyan-200",
    },
    {
      id: 6,
      type: "text",
      category: "thoughts",
      content:
        "React + Framer Motion = ❤️. Ta kombinacja pozwala tworzyć niesamowite interfejsy użytkownika z płynnymi animacjami.",
      color: "bg-red-100 border-red-200",
      textColor: "text-red-800",
    },
    {
      id: 7,
      type: "quote",
      category: "inspiration",
      content:
        "The best way to find out if you can trust somebody is to trust them.",
      author: "Ernest Hemingway",
      color: "bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-800",
    },
    {
      id: 8,
      type: "image",
      category: "photos",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=180&fit=crop",
      title: "Leśna ścieżka",
      color: "bg-emerald-100 border-emerald-200",
    },
    {
      id: 9,
      type: "text",
      category: "tips",
      content:
        "Pamiętaj o performance! Layout animations mogą być kosztowne, więc używaj ich mądrze i testuj na słabszych urządzeniach.",
      color: "bg-orange-100 border-orange-200",
      textColor: "text-orange-800",
    },
    {
      id: 10,
      type: "quote",
      category: "inspiration",
      content: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      color: "bg-pink-100 border-pink-200",
      textColor: "text-pink-800",
    },
    {
      id: 11,
      type: "image",
      category: "photos",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=220&fit=crop",
      title: "Jezioro w lesie",
      color: "bg-teal-100 border-teal-200",
    },
    {
      id: 12,
      type: "text",
      category: "thoughts",
      content:
        "Masonry layout w połączeniu z layout animations tworzy piękne, dynamiczne interfejsy gdzie elementy płynnie się przestawiają.",
      color: "bg-violet-100 border-violet-200",
      textColor: "text-violet-800",
    },
  ];

  const activeFilter = "all";
  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const filters = [
    { id: "all", label: "Wszystkie", count: items.length },
    {
      id: "thoughts",
      label: "Myśli",
      count: items.filter((i) => i.category === "thoughts").length,
    },
    {
      id: "photos",
      label: "Zdjęcia",
      count: items.filter((i) => i.category === "photos").length,
    },
    {
      id: "tips",
      label: "Porady",
      count: items.filter((i) => i.category === "tips").length,
    },
    {
      id: "inspiration",
      label: "Inspiracje",
      count: items.filter((i) => i.category === "inspiration").length,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Masonry Wall
          </h1>
          <p className="text-gray-600">
            Dynamiczny layout z automatycznymi animacjami
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
              onClick={() => {
                /* Change active filter */
              }}
            >
              {filter.label}
              <span className="ml-1 opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid ${item.color} border-2 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden`}
            >
              {item.type === "text" && (
                <div className="p-6">
                  <p className={`${item.textColor} leading-relaxed`}>
                    {item.content}
                  </p>
                  <div className="mt-4 text-xs text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </div>
                </div>
              )}

              {item.type === "quote" && (
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`text-4xl ${item.textColor} opacity-30`}>
                      "
                    </span>
                  </div>
                  <blockquote
                    className={`${item.textColor} text-lg italic leading-relaxed mb-4`}
                  >
                    {item.content}
                  </blockquote>
                  <cite className={`${item.textColor} text-sm font-medium`}>
                    — {item.author}
                  </cite>
                  <div className="mt-4 text-xs text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </div>
                </div>
              )}

              {item.type === "image" && (
                <div>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl">Brak elementów w tej kategorii</p>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mt-12 text-gray-600">
          <p>
            Wyświetlane: {filteredItems.length} z {items.length} elementów
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
