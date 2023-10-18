import React from 'react';
import styles from './FormButtons.module.css';
function FormButtons() {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
}

export default FormButtons;
