import { AnimatePresence } from "motion/react";
import React, { useState } from "react";

/// TO DO

const SharedLayoutGallery = () => {
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

  const [selectedId, setSelectedId] = useState(null);
  const selectedImage = selectedId
    ? images.find((img) => img.id === selectedId)
    : null;

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Galeria Fotografii
        </h1>
        <p className="text-gray-400 text-center">
          Kliknij na zdjęcie aby zobaczyć szczegóły
        </p>
      </div>

      {/* Grid galerii */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedId(image.id)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Overlay info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.location}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSelectedId(null)}
            />

            {/* Content */}
            <div className="relative bg-gray-800 rounded-xl max-w-3xl w-full mx-4 overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full object-cover max-h-[70vh]"
              />
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {selectedImage.description}
                </p>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>
                    <strong>Kategoria:</strong> {selectedImage.category}
                  </p>
                  <p>
                    <strong>Lokalizacja:</strong> {selectedImage.location}
                  </p>
                  <p>
                    <strong>Aparat:</strong> {selectedImage.camera}
                  </p>
                  <p>
                    <strong>Ustawienia:</strong> {selectedImage.settings}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedLayoutGallery;
