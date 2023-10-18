import React, { useState } from 'react';

import UserInput from './UserInput';
import styles from './UserForm.module.css';
import FormButtons from './FormButtons';
function UserForm(props) {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');
  function resetHandler() {
    setCurrentSavings('');
    setYearlySavings('');
    setExpectedReturn('');
    setDuration('');
    props.onResetTable();
  }
  function changeSavingsHandler(val) {
    setCurrentSavings(val);
  }
  function changeYearlySavingsHandler(val) {
    setYearlySavings(val);
  }
  function changeExpectedReturnHandler(val) {
    setExpectedReturn(val);
  }
  function changeDurationHandler(val) {
    setDuration(val);
  }
  function submitFormHandler(e) {
    e.preventDefault();
    const userInput = {
      'current-savings': currentSavings,
      'yearly-contribution': yearlySavings,
      'expected-return': expectedReturn,
      duration,
    };
    setCurrentSavings('');
    setYearlySavings('');
    setExpectedReturn('');
    setDuration('');
    props.onSub(userInput);
  }
  return (
    <form
      onSubmit={submitFormHandler}
      onReset={resetHandler}
      className={styles.form}
    >
      <div className={styles['input-group']}>
        <UserInput
          Value={currentSavings}
          onChan={changeSavingsHandler}
          id="current-savings"
          text="Current Savings ($)"
        />
        <UserInput
          Value={yearlySavings}
          onChan={changeYearlySavingsHandler}
          id="yearly-contribution"
          text="Yearly Savings ($)"
        />
      </div>
      <div className={styles['input-group']}>
        <UserInput
          Value={expectedReturn}
          onChan={changeExpectedReturnHandler}
          id="expected-return"
          text="Expected Interest (%, per year)"
        />
        <UserInput
          Value={duration}
          onChan={changeDurationHandler}
          id="duration"
          text="Investment Duration (years)"
        />
      </div>
      <FormButtons />
    </form>
  );
}

export default UserForm;
