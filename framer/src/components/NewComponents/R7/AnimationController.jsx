import React, { useState } from "react";

import { motion, useAnimation } from "motion/react";

const animationModes = [
  { value: "linear", label: "Liniowy", icon: "📏" },
  { value: "spring", label: "Sprężynowy", icon: "🌀" },
  { value: "bounce", label: "Bounce", icon: "⚡" },
];

const speedOptions = [
  { value: "slow", label: "Wolno", multiplier: 0.5 },
  { value: "normal", label: "Normalnie", multiplier: 1 },
  { value: "fast", label: "Szybko", multiplier: 2 },
];

const presetAnimations = [
  {
    name: "Koło",
    path: [
      { x: 100, y: 0 },
      { x: 0, y: 100 },
      { x: -100, y: 0 },
      { x: 0, y: -100 },
      { x: 0, y: 0 },
    ],
  },
  {
    name: "Kwadrat",
    path: [
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: -100, y: 100 },
      { x: -100, y: -100 },
      { x: 100, y: -100 },
      { x: 0, y: 0 },
    ],
  },
  {
    name: "Zigzag",
    path: [
      { x: 50, y: -50 },
      { x: -50, y: 50 },
      { x: 50, y: 150 },
      { x: -50, y: 250 },
      { x: 0, y: 0 },
    ],
  },
];

export default function AnimationController() {
  const controls = useAnimation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [animationMode, setAnimationMode] = useState("linear");
  const [speed, setSpeed] = useState("normal");
  const [presetAnimation, setPresetAnimation] = useState("Koło");
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const handlePlay = () => {
    setIsPlaying(true);

    const durationMultiplier =
      speedOptions.find((s) => s.value === speed)?.multiplier || 1;

    const presentAnimation = animationModes.find(
      (mode) => mode.value === animationMode
    );

    controls.start({
      x: presentAnimation.path.map((p) => p.x),
      y: presentAnimation.path.map((p) => p.y),
      transition: {
        duration: presentAnimation.path.length * 1 * durationMultiplier, // np. 1s per krok
        ease:
          animationMode === "linear"
            ? "linear"
            : animationMode === "spring"
            ? "spring"
            : "easeOut", // bounce
      },
    });
  };

  const handlePause = () => {
    setIsPlaying(false);
    // Tu będzie logika pauzowania animacji
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentPosition({ x: 0, y: 0 });
    // Tu będzie logika resetu animacji
  };

  const handleModeChange = (mode) => {
    setAnimationMode(mode);
    // Tu będzie logika zmiany trybu animacji
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    // Tu będzie logika zmiany prędkości
  };

  const handlePresetAnimation = (preset) => {
    // Tu będzie logika uruchamiania animacji predefiniowanej
    console.log("Starting preset:", preset.name);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Kontroler Animacji
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panel Kontrolny */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Panel Kontrolny</h2>

              {/* Podstawowe Kontrole */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">
                  Podstawowe Kontrole
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className={`flex-1 py-2 px-4 rounded font-medium ${
                      isPlaying
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {isPlaying ? "⏸️ Pause" : "▶️ Play"}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2 px-4 bg-red-500 text-white rounded font-medium hover:bg-red-600"
                  >
                    🔄 Reset
                  </button>
                </div>
              </div>

              {/* Tryby Animacji */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Tryb Animacji</h3>
                <div className="space-y-2">
                  {animationModes.map((mode) => (
                    <button
                      key={mode.value}
                      onClick={() => handleModeChange(mode.value)}
                      className={`w-full p-3 rounded-lg text-left transition-colors ${
                        animationMode === mode.value
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      <span className="mr-2">{mode.icon}</span>
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kontrola Prędkości */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Prędkość</h3>
                <div className="grid grid-cols-3 gap-2">
                  {speedOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSpeedChange(option.value)}
                      className={`py-2 px-3 rounded text-sm font-medium ${
                        speed === option.value
                          ? "bg-purple-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animacje Predefiniowane */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">
                  Animacje Predefiniowane
                </h3>
                <div className="space-y-2">
                  {presetAnimations.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handlePresetAnimation(preset)}
                      className="w-full p-3 bg-indigo-100 hover:bg-indigo-200 rounded-lg text-left transition-colors"
                    >
                      <span className="font-medium">{preset.name}</span>
                      <div className="text-xs text-gray-600 mt-1">
                        {preset.path.length} kroków
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-700 mb-2">Status</h3>
                <div className="text-sm space-y-1">
                  <div>
                    Stan:{" "}
                    <span className="font-medium">
                      {isPlaying ? "Odtwarzanie" : "Zatrzymano"}
                    </span>
                  </div>
                  <div>
                    Tryb:{" "}
                    <span className="font-medium">
                      {
                        animationModes.find((m) => m.value === animationMode)
                          ?.label
                      }
                    </span>
                  </div>
                  <div>
                    Prędkość:{" "}
                    <span className="font-medium">
                      {speedOptions.find((s) => s.value === speed)?.label}
                    </span>
                  </div>
                  <div>
                    Pozycja:{" "}
                    <span className="font-medium">
                      X: {currentPosition.x}, Y: {currentPosition.y}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Obszar Animacji */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Obszar Animacji</h2>

              {/* Canvas */}
              <div className="relative bg-gray-50 rounded-lg h-96 overflow-hidden border-2 border-dashed border-gray-300">
                {/* Siatka pomocnicza */}
                <div className="absolute inset-0 opacity-10">
                  {/* Linie pionowe */}
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-gray-400"
                      style={{ left: `${(i + 1) * 10}%` }}
                    />
                  ))}
                  {/* Linie poziome */}
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-gray-400"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                </div>

                {/* Środek układu współrzędnych */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

                {/* Element do animacji */}
                <div
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-blue-500 rounded-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold shadow-lg"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${currentPosition.x}px) translateY(${currentPosition.y}px)`,
                  }}
                >
                  📦
                </div>

                {/* Informacje o stanie */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded text-sm">
                  <div>
                    Mode:{" "}
                    {
                      animationModes.find((m) => m.value === animationMode)
                        ?.label
                    }
                  </div>
                  <div>
                    Speed: {speedOptions.find((s) => s.value === speed)?.label}
                  </div>
                  <div>Status: {isPlaying ? "Playing" : "Stopped"}</div>
                </div>
              </div>

              {/* Legenda */}
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  Punkt startowy (0,0)
                </p>
                <p>
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Element animowany
                </p>
                <p className="mt-2">
                  Użyj panelu kontrolnego, aby sterować animacją elementu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
