import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Button do otwierania */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Otwórz Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: -50 }}
                className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Tytuł Modala
                </h2>
                <p className="text-gray-600 mb-6">
                  To jest przykładowa zawartość modala. Możesz tutaj umieścić
                  dowolną treść, formularze lub inne komponenty.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                  >
                    Anuluj
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Zatwierdź
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalComponent;
