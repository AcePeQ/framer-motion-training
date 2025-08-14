import React from "react";

const steps = [
  {
    id: 0,
    title: "Informacje podstawowe",
    description: "Podaj swoje dane osobowe",
  },
  {
    id: 1,
    title: "Preferencje",
    description: "Wybierz swoje zainteresowania",
  },
  {
    id: 2,
    title: "Podsumowanie",
    description: "Sprawdź wprowadzone dane",
  },
];

const MultiStepForm = () => {
  const currentStep = 0;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Imię i nazwisko
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="jan@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Zainteresowania
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Technologia",
                  "Sport",
                  "Muzyka",
                  "Książki",
                  "Podróże",
                  "Gotowanie",
                ].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-500"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jak o nas usłyszałeś?
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Wybierz opcję</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Polecenie znajomych</option>
                <option>Inne</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Podsumowanie</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Imię:</strong> Jan Kowalski
                </p>
                <p>
                  <strong>Email:</strong> jan@example.com
                </p>
                <p>
                  <strong>Telefon:</strong> +48 123 456 789
                </p>
                <p>
                  <strong>Zainteresowania:</strong> Technologia, Sport, Muzyka
                </p>
                <p>
                  <strong>Źródło:</strong> Google
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="text-green-500 text-xl mr-3">✓</div>
                <div>
                  <p className="text-green-800 font-medium">
                    Gotowe do wysłania
                  </p>
                  <p className="text-green-600 text-sm">
                    Sprawdź dane i zatwierdź formularz
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      index <= currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index < currentStep ? "✓" : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 w-16 mx-2 ${
                        index < currentStep ? "bg-blue-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-600">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Form content */}
          <div className="mb-8">{renderStep()}</div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              Poprzedni
            </button>

            <div className="text-sm text-gray-500 self-center">
              Krok {currentStep + 1} z {steps.length}
            </div>

            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === steps.length - 1
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {currentStep === steps.length - 1 ? "Zatwierdź" : "Następny"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
