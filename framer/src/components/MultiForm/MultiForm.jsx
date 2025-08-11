import { useState } from "react";

import styles from "./MultiForm.module.css";
import { AnimatePresence } from "motion/react";
import Person from "./Person";
import Address from "./Address";

import Sumary from "./Sumary";

export const formVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction * 100,
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction * -100,
  }),
};

function MultiForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleBack() {
    if (step === 0) return;

    setStep((prev) => prev - 1);
    setDirection(-1);
  }

  function handleNext() {
    if (step === 2) return;

    setStep((prev) => prev + 1);
    setDirection(1);
  }

  const content =
    step === 0 ? (
      <Person key={step} direction={direction} />
    ) : step === 1 ? (
      <Address key={step} direction={direction} />
    ) : (
      <Sumary key={step} direction={direction} />
    );

  return (
    <div className={styles.wrapper}>
      <AnimatePresence custom={direction} mode="wait">
        {content}
      </AnimatePresence>

      <div className={styles.buttons}>
        <button onClick={handleBack} className={styles.button}>
          Back
        </button>
        <button onClick={handleNext} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MultiForm;
