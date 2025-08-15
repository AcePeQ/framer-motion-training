import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SharedLayoutGallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      title: "Góry o zachodzie",
      description:
        "Majestyczne szczyty górskie w złotym świetle zachodzącego słońca",
      category: "natura",
      location: "Tatry, Polska",
      camera: "Canon EOS R5",
      settings: "f/8, 1/125s, ISO 100",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Leśne jezioro",
      description: "Spokojne jezioro otoczone gęstym lasem iglastym",
      category: "natura",
      location: "Mazury, Polska",
      camera: "Sony A7IV",
      settings: "f/5.6, 1/60s, ISO 200",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      title: "Tropikalna plaża",
      description: "Biały piasek i turkusowe wody oceanu na Malediwach",
      category: "podróże",
      location: "Malediwy",
      camera: "Fujifilm X-T4",
      settings: "f/11, 1/250s, ISO 100",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      title: "Mglisty las",
      description: "Ścieżka prowadząca przez mglisty las bukowy",
      category: "natura",
      location: "Bieszczady, Polska",
      camera: "Nikon D850",
      settings: "f/4, 1/30s, ISO 400",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
      title: "Nocne miasto",
      description: "Panorama miasta w nocy z lotu ptaka",
      category: "miasto",
      location: "Warszawa, Polska",
      camera: "Canon EOS R6",
      settings: "f/2.8, 2s, ISO 800",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
      title: "Jezioro w górach",
      description: "Wysokogórskie jezioro odbijające szczyty",
      category: "natura",
      location: "Alpy, Szwajcaria",
      camera: "Sony A7R IV",
      settings: "f/16, 1/15s, ISO 50",
    },
  ];

  const selectedImage = selectedId
    ? images.find((img) => img.id === selectedId)
    : null;

  const handleImageClick = (imageId) => {
    setSelectedId(imageId);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Galeria Fotografii
        </h1>
        <p className="text-gray-400 text-center">
          Kliknij na zdjęcie aby zobaczyć szczegóły
        </p>
      </motion.div>

      {/* Grid galerii */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => handleImageClick(image.id)}
              layout
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/3]">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  layoutId={`image-${image.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Overlay info */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    {/* 🔥 Tytuł też ma layoutId dla shared animation */}
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.location}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <motion.span
                    layoutId={`category-${image.id}`}
                    className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {image.category}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal ze szczegółami zdjęcia */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={handleCloseModal} />

            {/* Modal content */}
            <div className="relative bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={handleCloseModal}
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image - używa tego samego layoutId! */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <motion.img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    layoutId={`image-${selectedId}`}
                    transition={{
                      layout: { type: "tween", duration: 0.1, ease: "linear" },
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 text-white overflow-y-auto">
                  <div className="mb-6">
                    <span
                      layoutId={`category-${selectedImage.id}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block"
                    >
                      {selectedImage.category}
                    </span>

                    <h2 className="text-3xl font-bold mb-3">
                      {selectedImage.title}
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Lokalizacja
                      </h3>
                      <p className="text-white">{selectedImage.location}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Aparat
                      </h3>
                      <p className="text-white">{selectedImage.camera}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Ustawienia
                      </h3>
                      <p className="text-white">{selectedImage.settings}</p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex gap-4">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Pobierz
                      </button>
                      <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Udostępnij
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayoutGallery;
