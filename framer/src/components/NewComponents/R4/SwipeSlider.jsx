import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    title: "Górski Krajobraz",
    description: "Piękne szczyty górskie o zachodzie słońca",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    title: "Jezioro w Lesie",
    description: "Spokojne jezioro otoczone zielonym lasem",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    title: "Tropikalna Plaża",
    description: "Biały piasek i turkusowa woda oceanu",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    title: "Leśna Ścieżka",
    description: "Tajemnicza ścieżka prowadząca przez gęsty las",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleIndicationClick(selectedIndex) {
    if (selectedIndex < currentIndex) {
      setDirection(-1);
    }

    if (selectedIndex > currentIndex) {
      setDirection(1);
    }

    setCurrentIndex(selectedIndex);
  }

  function handleNextImage() {
    if (currentIndex >= images.length - 1) return;

    setDirection(1);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  function handlePrevImage() {
    if (currentIndex <= 0) return;

    setDirection(-1);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }

  const currentImage = images[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Slider container */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                x: `${direction * 100}%`,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: `${direction * -100}%`,
              }}
              key={currentIndex}
              className="relative h-96"
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {currentImage.title}
                </h2>
                <p className="text-gray-200">{currentImage.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrevImage}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              ←
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNextImage}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              onClick={() => handleIndicationClick(index)}
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Info */}
        <div className="text-center mt-6 text-gray-400">
          <p>
            {currentIndex + 1} z {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
