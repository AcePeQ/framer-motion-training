import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const formFields = [
  { name: "name", label: "Imię i nazwisko", type: "text" },
  { name: "email", label: "Adres email", type: "email" },
  { name: "phone", label: "Numer telefonu", type: "tel" },
  { name: "message", label: "Wiadomość", type: "textarea" },
];

const sequenceVariants = {
  closed: {
    scale: 0,
    opaicty: 0,
  },
  opening: {
    scale: 0.5,
    opacity: 0.5,
  },
  open: {
    scale: 1,
    opacity: 1,
  },
};

export default function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState("closed"); // closed, opening, open

  const openModal = () => {
    setIsModalOpen(true);
    setModalState("opening");
    // Symulacja sekwencji stanów
    setTimeout(() => setModalState("open"), 300);
  };

  const closeModal = () => {
    setModalState("opening");
    setTimeout(() => {
      setModalState("closed");
      setIsModalOpen(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Modal z Sekwencyjnymi Stanami
        </h1>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Otwórz Modal
        </button>

        <div className="mt-8 p-4 bg-white/70 rounded-lg">
          <p className="text-sm text-gray-600">
            Stan modala: <span className="font-semibold">{modalState}</span>
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
              variants={sequenceVariants}
              animate={modalState}
            />

            {/* Modal Content */}
            <motion.div
              variants={sequenceVariants}
              animate={modalState}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Formularz kontaktowy</h2>
                    <button
                      onClick={closeModal}
                      className="text-white hover:text-gray-200 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-blue-100 mt-2">Skontaktuj się z nami</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <form className="space-y-4">
                    {formFields.map((field, index) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={3}
                            placeholder={`Wprowadź ${field.label.toLowerCase()}`}
                          />
                        ) : (
                          <input
                            type={field.type}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Wprowadź ${field.label.toLowerCase()}`}
                          />
                        )}
                      </div>
                    ))}
                  </form>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Anuluj
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Wyślij
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
