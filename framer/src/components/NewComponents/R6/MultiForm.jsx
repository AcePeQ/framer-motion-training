import React, { useState } from "react";

import { motion } from "motion/react";

const steps = [
  {
    title: "Dane osobowe",
    description: "Podaj swoje podstawowe informacje",
    icon: "👤",
  },
  {
    title: "Adres",
    description: "Gdzie możemy Cię znaleźć?",
    icon: "🏠",
  },
  {
    title: "Preferencje",
    description: "Dostosuj swoje ustawienia",
    icon: "⚙️",
  },
  {
    title: "Podsumowanie",
    description: "Sprawdź i potwierdź dane",
    icon: "✅",
  },
];

const buttonVariants = {
  normal: {
    backgroundColor: "#fff",
    color: "#fff",
  },
  loading: {
    backgroundColor: "#fff",
    color: "#fff",
  },
  error: {
    backgroundColor: "#fff",
    color: "#fff",
  },
  success: {
    backgroundColor: "#fff",
    color: "#fff",
  },
};

export default function MultiStepFormComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Krok 1 - Dane osobowe
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Krok 2 - Adres
    street: "",
    city: "",
    zipCode: "",
    country: "Polska",
    // Krok 3 - Preferencje
    newsletter: false,
    notifications: false,
    marketing: false,
    // Krok 4 - Podsumowanie
    agreedToTerms: false,
  });

  const [buttonState, setButtonState] = useState("normal"); // normal, loading, success, error

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const simulateSubmit = () => {
    setButtonState("loading");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // 70% szans na sukces
      setButtonState(isSuccess ? "success" : "error");
      setTimeout(() => setButtonState("normal"), 2000);
    }, 2000);
  };

  const getButtonText = () => {
    switch (buttonState) {
      case "loading":
        return "Przetwarzanie...";
      case "success":
        return "Wysłano!";
      case "error":
        return "Błąd - spróbuj ponownie";
      default:
        return currentStep === steps.length - 1 ? "Wyślij formularz" : "Dalej";
    }
  };

  const getButtonClass = () => {
    const baseClass = "px-6 py-3 rounded-lg font-semibold transition-colors ";
    switch (buttonState) {
      case "loading":
        return baseClass + "bg-gray-400 text-white cursor-not-allowed";
      case "success":
        return baseClass + "bg-green-500 text-white";
      case "error":
        return baseClass + "bg-red-500 text-white";
      default:
        return baseClass + "bg-blue-500 text-white hover:bg-blue-600";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nazwisko
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Kowalski"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jan.kowalski@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ulica i numer
              </label>
              <input
                type="text"
                value={formData.street}
                onChange={(e) => handleInputChange("street", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ul. Przykładowa 123"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Miasto
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Warszawa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kod pocztowy
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="00-001"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kraj
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Polska">Polska</option>
                <option value="Niemcy">Niemcy</option>
                <option value="Francja">Francja</option>
                <option value="Hiszpania">Hiszpania</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) =>
                    handleInputChange("newsletter", e.target.checked)
                  }
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium text-gray-700"
                >
                  Chcę otrzymywać newsletter z nowościami
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={formData.notifications}
                  onChange={(e) =>
                    handleInputChange("notifications", e.target.checked)
                  }
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="notifications"
                  className="text-sm font-medium text-gray-700"
                >
                  Powiadomienia o ważnych aktualizacjach
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={formData.marketing}
                  onChange={(e) =>
                    handleInputChange("marketing", e.target.checked)
                  }
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="marketing"
                  className="text-sm font-medium text-gray-700"
                >
                  Materiały marketingowe i oferty specjalne
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">
                Podsumowanie danych
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Imię i nazwisko:</span>{" "}
                  {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Telefon:</span> {formData.phone}
                </p>
                <p>
                  <span className="font-medium">Adres:</span> {formData.street},{" "}
                  {formData.city} {formData.zipCode}
                </p>
                <p>
                  <span className="font-medium">Kraj:</span> {formData.country}
                </p>
                <p>
                  <span className="font-medium">Newsletter:</span>{" "}
                  {formData.newsletter ? "Tak" : "Nie"}
                </p>
                <p>
                  <span className="font-medium">Powiadomienia:</span>{" "}
                  {formData.notifications ? "Tak" : "Nie"}
                </p>
                <p>
                  <span className="font-medium">Marketing:</span>{" "}
                  {formData.marketing ? "Tak" : "Nie"}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) =>
                  handleInputChange("agreedToTerms", e.target.checked)
                }
                className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-gray-700"
              >
                Akceptuję regulamin i politykę prywatności
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  layoutId="step"
                  animate={{
                    backgroundColor:
                      index <= currentStep
                        ? "oklch(62.3% 0.214 259.815)"
                        : "#d1d5dc",
                    color: index <= currentStep ? " #fff" : " #4a5565",
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold`}
                >
                  {index < currentStep ? "✓" : index + 1}
                </motion.div>
                <span className="text-xs mt-2 text-center max-w-20">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              layout
              animate={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            ></motion.div>
          </div>
        </div>

        {/* Form Card */}
        <div key={currentStep} className="bg-white rounded-lg shadow-lg p-8">
          {/* Step Header */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="text-4xl mb-4">{steps[currentStep].icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </motion.div>

          {/* Step Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            {renderStep()}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold ${
                currentStep === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              Wstecz
            </button>

            <button
              onClick={
                currentStep === steps.length - 1 ? simulateSubmit : nextStep
              }
              disabled={buttonState === "loading"}
              className={getButtonClass()}
            >
              {buttonState === "loading" && (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              )}
              {getButtonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
