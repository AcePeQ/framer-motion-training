import { useState } from "react";

import styles from "./MultiForm.module.css";
import { AnimatePresence } from "motion/react";
import Person from "./Person";
import Address from "./Address";

import Sumary from "./Sumary";

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
    step === 0 ? <Person /> : step === 1 ? <Address /> : <Sumary />;

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
